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
    this.props.dispatch(fetchRentals());
  }

  render() {
    if (this.props.loading) 
      return <div id="loading"><img src={require("../images/ajax-loader.gif")} alt="Loading..."/></div>;
    
    let rentals;

    if(this.props.rentals && this.props.rentals.length) {
      rentals = this.props.rentals.map((rental, index) => 
        <RentalCard key={index} link={`/edit-rental`} name={rental.name} rental={rental} image={require("../images/home.png")} id={rental.id}/>
      );
    } else {
      return <div id="loading"><img src={require("../images/ajax-loader.gif")} alt="Loading..."/></div>;
    }

    return (
      <div className="dashboard">
        <Header title='Rental Properties' />
        {rentals}
        <RentalCard link='/add-rental' name='Add Property' newRental={true} image={require("../images/add-home.png")} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      username: state.auth.currentUser.username,
      name: `${currentUser.firstName} ${currentUser.lastName}`,
      protectedData: state.protectedData.data,
      rentals: state.rental.rentals,
      loading: state.rental.loading
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));