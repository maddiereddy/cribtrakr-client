import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import requiresLogin from './requires-login';
import './dashboard.css';

export function Dashboard(props) {
	if (props.loggedIn) {
		return <Redirect to="/rentals" />;
	}
	
	return (
		<div className="userHome">
			<h1><i>Hello, {props.name}!</i></h1>
      <h2>Do you want to start by viewing your <br />
      <Link to="/rentals">Rental Properties</Link> or <Link to="/expenses">Expenses</Link> ?</h2>
		</div>
	);
}

const mapStateToProps = state => {
	const {currentUser} = state.auth;
	return {
		loggedIn: currentUser != null,
		loading: currentUser.loading,
		name: `${currentUser.firstName} ${currentUser.lastName}`
	}
}

export default requiresLogin()(connect(mapStateToProps)(Dashboard));