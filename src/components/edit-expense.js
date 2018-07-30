import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchExpense} from '../actions/expenses';
import './dashboard.css';
import Header from './header';
import { EditExpenseForm } from './edit-expense-form';
import spinner from '../images/ajax-loader.gif';

export class EditExpense extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchExpense(this.props.match.params.id, this.props.match.params.propId));
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
        <Header title='Update Expense Details' />
        <section>
        <EditExpenseForm initialValues={initialValues} username={username} />
        </section>
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
    currentExpense: state.expense.currentExpense,
    loading: state.expense.loading
  };
};

export default requiresLogin()(connect(mapStateToProps)(EditExpense));