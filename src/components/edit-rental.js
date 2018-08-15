import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchRental} from '../actions/rentals';
import './dashboard.css';
import Header from './header';
import { EditRentalForm } from './edit-rental-form';
import spinner from '../images/ajax-loader.gif';

export class EditRental extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchRental(this.props.match.params.id));
  }

  render() {
    if (this.props.loading) 
      return <div id="loading"><img src={spinner} alt="Loading..."/></div>;
    
    let username;
    let initialValues;

    if(this.props.currentRental) {
        initialValues = this.props.currentRental;
    } 
    if(this.props.username) {
        username = this.props.username;
    }

    if (!initialValues) {
      return <div id="loading"><img src={spinner} alt="Loading..."/></div>;
    }

    return (
      <div className="dashboard">
        <Header title='Update Property Details' />
        <section className="outermost-section">
        <EditRentalForm initialValues={initialValues} username={username} />
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
    currentRental: state.rental.currentRental,
    loading: state.rental.loading
  };
};

export default requiresLogin()(connect(mapStateToProps)(EditRental));