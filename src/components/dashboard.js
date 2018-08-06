import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchRentals} from '../actions/rentals';
import './dashboard.css';
import RentalCard from './rental-card';
import Header from './header';
// import spinner from '../images/ajax-loader.gif';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    if (this.props.hasAuthToken) this.props.dispatch(fetchRentals(this.props.username));
  }

  render() {
    // if (this.props.loading) 
    //   return <div id="loading"><img src={spinner} alt="Loading..."/></div>;
    

    let rentals;

    if (this.props.rentals && this.props.rentals.length) {
      rentals = this.props.rentals.map((rental, index) => 
        <RentalCard key={index} link={`/edit-rental`} name={rental.name} rental={rental} image={require("../images/home.png")} id={rental.id}/>
      );
    } 

    let noRentalsMessage = (
      <div>
        <span>You don't have any rental properties yet.</span>
      </div>
    )

    return (
      <div className="dashboard">
        <Header title='Rental Properties' />
        { this.props.rentals && this.props.rentals.length ? rentals : 
          noRentalsMessage }
        {/* {rentals} */}
        <RentalCard link='/add-rental' name='Add Property' newRental={true} image={require("../images/add-home.png")} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    hasAuthToken: state.auth.authToken !== null,
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    rentals: state.rental.rentals,
    loading: state.rental.loading
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));