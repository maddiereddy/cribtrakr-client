import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchRentals} from '../actions/rentals';
import './dashboard.css';
import Header from './header';
import { AddExpenseForm } from './add-expense-form';
import spinner from '../images/ajax-loader.gif';

export class AddExpense extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchRentals());
  }

  render() {
    if (this.props.loading) 
      return <div id="loading"><img src={spinner} alt="Loading..."/></div>;
      
    return (
      <div className="dashboard">
        <Header title='Add New Expense' />
        <section className="outermost-section">
        <AddExpenseForm username={this.props.username} rentals={this.props.rentals}/>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.currentUser.username,
    protectedData: state.protectedData.data,
    rentals: state.rental.rentals,
    loading: state.rental.loading
  };
};

export default requiresLogin()(connect(mapStateToProps)(AddExpense));