import React from 'react';
import {connect} from 'react-redux';
import {Route, Router, withRouter} from 'react-router-dom';

import Nav from './nav';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';
import Expenses from './expenses';
import Rentals from './rentals';
import EditRental from './edit-rental';
import DeleteRental from './delete-rental';
import AddRental from './add-rental';
import AddExpense from './add-expense';
import EditExpense from './edit-expense';
import DeleteExpense from './delete-expense';
import Footer from './footer'
import {refreshAuthToken} from '../actions/auth';
import LoginForm from './login-form';
import history from '../history'

export class App extends React.Component {
  
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
        // When we are logged in, refresh the auth token periodically
        this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
        // Stop refreshing when we log out
        this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
      this.refreshInterval = setInterval(
          () => this.props.dispatch(refreshAuthToken()),
          60 * 60 * 1000 // One hour
      );
  }

  stopPeriodicRefresh() {
      if (!this.refreshInterval) {
          return;
      }

      clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <Router history={history}>
      <div className="app" role="main">
        <Nav />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/rentals" component={Rentals} />
        <Route exact path="/expenses" component={Expenses} />
        <Route exact path="/edit-rental/:id" component={EditRental} />
        <Route exact path="/delete-rental/:id" component={DeleteRental} />
        <Route exact path="/add-rental" component={AddRental} />
        <Route exact path="/add-expense" component={AddExpense} />
        <Route exact path="/edit-expense/:id" component={EditExpense} />
        <Route exact path="/delete-expense/:id" component={DeleteExpense} />
        <Footer />
      </div>  
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
