import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchAllExpenses} from '../actions/expenses';
import './dashboard.css';
import Header from './header';
import ExpenseCard from './expense-card';
import SearchForm from './search-form';
import spinner from '../images/ajax-loader.gif';
import * as data from '../data.json';

export class Expenses extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchAllExpenses());
  }

  render() {
    if (this.props.loading) 
      return <div id="loading"><img src={spinner} alt="Loading..."/></div>;
    
    let expenses;

    if(this.props.expenses && this.props.expenses.length) {
      expenses = this.props.expenses.map((expense, index) => (
        <ExpenseCard key={index} link={`/edit-expense`} data={data} {...expense} />
      ));
    } else {
      return <div id="loading"><img src={spinner} alt="Loading..."/></div>;
    }

    return (
      <div className="dashboard">
        <Header title='Expenses' />
        <Link to='/add-expense'><button className="add-expense-button">Add Expense</button></Link>
        <SearchForm data={data}/>
        <ul>
        {expenses}
        </ul>
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
      expenses: state.expense.expenses,
      loading: state.expense.loading
  };
};

export default requiresLogin()(connect(mapStateToProps)(Expenses));