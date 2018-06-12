import React from 'react';
import {connect} from 'react-redux';
// import {Link, Redirect} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <h1>Welcome to CribTrakr</h1>
            <LoginForm />
            {/* <Link to="/register">Register</Link> */}
        </div>
    );
}

const mapStateToProps = state => ({
    // loggedIn: state.auth.currentUser !== null
    loggedIn: true
});

export default connect(mapStateToProps)(LandingPage);
