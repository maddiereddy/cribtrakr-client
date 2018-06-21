import React from 'react';
// import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
// import requiresLogin from './requires-login';
// import {fetchProtectedData} from '../actions/protected-data';
import './dashboard.css';
import Header from './header';
import ExpenseCard from './expense-card';
import SearchForm from './search-form';

export default class Expenses extends React.Component {
  // componentDidMount() {
  //     // this.props.dispatch(fetchProtectedData());
  // }

  constructor(props) {
    super(props);

    this.state = {
      expenses: [
        {
          link: '/expense-details',
          date: 'June 12, 2018',
          vendor: 'Acme cooling and heating',
          description: 'AC repair',
          property: 'Property 1',
          category: 'Repairs',
          expense: '$500'
        },
        {
          link: '/expense-details',
          date: 'May 2, 2018',
          vendor: 'Acme Cleaning',
          description: 'Deep cleaning before move-in',
          property: 'Property 2',
          category: 'Cleaning and Maintenance',
          expense: '$250'
        },
        {
          link: '/expense-details',
          date: 'Apr 14, 2018',
          vendor: 'Diablo Highlands HOA',
          description: 'Fine for leaving garbage cans out too long',
          property: 'Property 3',
          category: 'Fines',
          expense: '$120'
        }
      ]
    };
  }

  render() {
    const expenses = this.state.expenses.map((expense, index) => (
      <ExpenseCard key={index} {...expense} />
    ));
    return (
      <div className="dashboard">
        <Header title='Expenses' />
        <Link to='/add-expense'><button className="add-expense-button">Add Expense</button></Link>
        <SearchForm />
        <ul>
        {expenses}
        </ul>
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