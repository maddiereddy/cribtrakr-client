import React from 'react';
// import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
// import requiresLogin from './requires-login';
// import {fetchProtectedData} from '../actions/protected-data';
import './dashboard.css';
import Header from './header';
import ExpenseCard from './expense-card';
import SearchForm from './search-form';

export class Expenses extends React.Component {
    componentDidMount() {
        // this.props.dispatch(fetchProtectedData());
    }

  render() {
    return (
      <div className="dashboard">
        <Header title='Expenses' />
        <div className="container">
          <section className="search-section">
            <SearchForm />
            <Link to='/add-expense'><button className="add-expense">Add Expense</button></Link>
          </section>
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//     // const {currentUser} = state.auth;
//     // return {
//     //     username: state.auth.currentUser.username,
//     //     name: `${currentUser.firstName} ${currentUser.lastName}`,
//     //     protectedData: state.protectedData.data
//     // };
// };

// export default requiresLogin()(connect(mapStateToProps)(Expenses));
export default (Expenses);