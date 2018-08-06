import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchAllExpenses} from '../actions/expenses';
import {fetchRentals} from '../actions/rentals';
import Header from './header';
import ExpenseCard from './expense-card';
import spinner from '../images/ajax-loader.gif';
import './dashboard.css';

export class Expenses extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      selectedRental: '',
      selFromDate: '',
      selToDate: '',
      filterByDate: false,
      filterByProperty: false
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchRentals(this.props.username));
    this.props.dispatch(fetchAllExpenses());
  }

  OnRentalChange = (e => {
    this.setState({
      selectedRental: e.target.value,
      filterByProperty: true, 
      filterByDate: false, 
      selFromDate: '',
      selToDate: ''
    });
  });

  OnFromDateChange = (e => {
    this.setState({selFromDate: e.target.value});
  });

  OnToDateChange = (e => {
    this.setState({selToDate: e.target.value});
  });

  OnSubmit = (e => {
    if (this.state.selFromDate < this.state.selToDate) {
      if (this.state.selFromDate !== '' && this.state.selToDate !== '') {
        this.setState({
          filterByDate: true,
          filterByProperty: false,
          selectedRental: ''
        });
        document.getElementById('filter').value = '';
      } else {
        alert(`Please select both 'From Date' and 'To Date'`);
      }
    } else {
      alert(`Please select 'From Date' earlier than the 'To Date'`);
    }
  });

  render() {
    if (this.props.loading) 
      return <div id="loading"><img src={spinner} alt="Loading..."/></div>;

    let rentals;
    if(this.props.rentals && this.props.rentals.length) {
      rentals = this.props.rentals.map((rental, index) => 
      <option key={index} value={rental.name}>{rental.name}</option>
      );
    } 

    //display filter form
    let filter = (
      <fieldset className="search">
        <legend id="search-legend">Filter By:</legend>
        <label htmlFor="property">Property:</label>
        <select id="filter" className="drop-down" name="property" onChange={this.OnRentalChange} required>
        <option key={1000000} value={''}>Select a property</option>
          {rentals}
        </select>
        <br />
        <hr />
        <p>Or</p>
        <label htmlFor="dateFrom">From Date:</label>
        <input type="date" name="dateFrom" value={this.state.selFromDate} onChange={this.OnFromDateChange}/>
        <label htmlFor="dateTo">To Date:</label>
        <input type="date" name="dateTo" value={this.state.selToDate} onChange={this.OnToDateChange}/>
        <button id="search-button" onClick={this.OnSubmit}>Go</button>
      </fieldset>
    );
    
    let expenses;
    if(this.props.expenses && this.props.expenses.length) {

      //check if filtering needs to be done
      let filteredExpenses = this.props.expenses;
      if (this.state.filterByProperty) {
        filteredExpenses = filteredExpenses.filter(item => item.propName === this.state.selectedRental);
      }
      if (this.state.filterByDate) {
        filteredExpenses = filteredExpenses.filter(item => 
          (item.date >= this.state.selFromDate && item.date <= this.state.selToDate)
        );
      }

      let sortedExpenses
      if (!filteredExpenses) {
        sortedExpenses = this.props.expenses;
      } else {
        sortedExpenses = filteredExpenses;
      }
      
      //sort the expenses according to date of service in descending order
      sortedExpenses.sort( (a,b) => b.date.localeCompare(a.date) );

      //display expense cards
      expenses = sortedExpenses.map((expense, index) => (
        <ExpenseCard key={index} link={`/edit-expense`} {...expense} />
      ));
    } 

    let noExpensesMessage = (
      <div>
        <span>You don't have any expenses yet.</span>
      </div>
    )
    // else {
    //   return <div id="loading"><img src={spinner} alt="Loading..."/></div>;
    // }


    return (
      <div className="dashboard">
        <Header title='Expenses' />
        { this.props.rentals && this.props.rentals.length ? 
        <Link to='/add-expense'><button className="add-expense-button">Add Expense</button></Link>
        : <p>Please add a rental property first!</p> }
        {filter}
        <ul>
        { this.props.expenses && this.props.expenses.length ? expenses : noExpensesMessage }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.currentUser.username,
    protectedData: state.protectedData.data,
    expenses: state.expense.expenses,
    loading: state.expense.loading,
    rentals: state.rental.rentals,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Expenses));