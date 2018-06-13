import React from 'react';
import {connect} from 'react-redux';
// import {Link, Redirect} from 'react-router-dom';
// import {Redirect} from 'react-router-dom';
import About from './about';
import LoginForm from './login-form';
import { setLoggedIn } from '../local-storage';
import {Nav2} from './nav2';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    //if (props.loggedIn) {
    //     return <Redirect to="/dashboard" />;
    // }
    setLoggedIn(false);

    return (
        <div id="top" className="home">
            <Nav2 />
            <h1>Welcome to CribTrakr</h1>
            <About />
            <br />
            <LoginForm />
            {/* <Link to="/register">Register</Link> */}
        </div>
    );
}

const mapStateToProps = state => ({
    // loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
