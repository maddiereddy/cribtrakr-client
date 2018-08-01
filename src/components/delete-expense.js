import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchExpense} from '../actions/expenses';
import './dashboard.css';
import Header from './header';
import { DeleteExpenseForm } from './delete-expense-form';
import spinner from '../images/ajax-loader.gif';

export class DeleteExpense extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchExpense(this.props.match.params.id));
  }

  render() {
    if (this.props.loading) 
      return <div id="loading"><img src={spinner} alt="Loading..."/></div>;
    
    let username;
    let initialValues;

    if(this.props.currentExpense) {
        initialValues = this.props.currentExpense;
    } 
    if(this.props.username) {
        username = this.props.username;
    }

    if (!initialValues) {
      return <div id="loading"><img src={spinner} alt="Loading..."/></div>;
    }

    return (
      <div className="dashboard">
        <Header title='Are you sure you want to delete this expense?' />
        <section>
        <DeleteExpenseForm initialValues={initialValues} username={username} />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.currentUser.username,
    protectedData: state.protectedData.data,
    currentExpense: state.expense.currentExpense,
    loading: state.expense.loading
  };
};

export default requiresLogin()(connect(mapStateToProps)(DeleteExpense));