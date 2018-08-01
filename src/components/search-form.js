import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchRentals} from '../actions/rentals';
import spinner from '../images/ajax-loader.gif';
import './dashboard.css';
// import {Categories} from '../data';

export class SearchForm extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchRentals());
  }

  render() {
    if (this.props.loading) 
      return <div id="loading"><img src={spinner} alt="Loading..."/></div>;
    
    let rentals;

    if(this.props.rentals && this.props.rentals.length) {
      rentals = this.props.rentals.map((rental, index) => 
      <option key={index} value={rental.name}>{rental.name}</option>
      );
    } else {
      return <div id="loading"><img src={spinner} alt="Loading..."/></div>;
    }
    // const categories = Categories.map((category, index) => 
    //   <option key={index} value={category.value}>{category.value}</option>
    // );
  
    return (
      <fieldset className="search">
        <legend id="search-legend">Filter By:</legend>
        <form id="search-form">
          <label htmlFor="property">Property:</label>
          <select className="drop-down" name="property" required>
            {rentals}
          </select>
          
          {/* <label htmlFor="category">Category:</label>
          <select className="drop-down" name="category" required>
            {categories}
          </select> */}
          <p>Or</p>
          <label htmlFor="dateFrom">From Date:</label>
          <input type="date" name="dateFrom" />
          <label htmlFor="dateTo">To Date:</label>
          <input type="date" name="dateTo" />
        <button id="search-button" type="submit">Go</button>
      </form>
    </fieldset>
    );
  }
};

SearchForm.defaultProps = {
  name: '',
  image: '',
  link: '',
  data: []
};

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

export default requiresLogin()(connect(mapStateToProps)(SearchForm));


