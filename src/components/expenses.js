import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import './dashboard.css';
import Header from './header';
import ExpenseCard from './expense-card';
import SearchForm from './search-form';

export class Expenses extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

  render() {
    return (
      <div className="dashboard">
        <Header title='Expenses' />
        <div class="container">
          <section className="search-section">
            <SearchForm />
            <a href='/add-expense'><button className="add-expense">Add Expense</button></a>
          </section>
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Expenses));