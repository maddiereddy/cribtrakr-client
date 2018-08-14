import React from 'react';
import {connect} from 'react-redux';
import {fetchRentals} from '../actions/rentals';
import './dashboard.css';
import RentalCard from './rental-card';
import requiresLogin from './requires-login';
import Header from './header';
import spinner from '../images/ajax-loader.gif';

export class Rentals extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRentals());
  }

  render() {
    if (this.props.loading) 
      return <div id="loading"><img src={spinner} alt="Loading..."/></div>;
    
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
        <RentalCard link='/add-rental' name='Add Property' newRental={true} image={require("../images/add-home.png")} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authToken: state.auth.authToken,
    currentUser: state.auth.currentUser,
    rentals: state.rental.rentals,
    loading: state.rental.loading
  };
};

export default requiresLogin()(connect(mapStateToProps)(Rentals));