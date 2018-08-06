import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import About from './about';
import LoginForm from './login-form';
import {captions} from '../data';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
      return <Redirect to="/dashboard" />;
  }

  return (
      <div id="home-section" className="home">
          <h1>Welcome to CribTrakr</h1>
          <About key={0} {...captions[0]} />
          <About key={1} {...captions[1]} />
          <About key={2} {...captions[2]} />
          <LoginForm />
          <Link to="/register">Register</Link>
          <div className="demo-credentials">
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>Demo Credentials</u></b> <br/>
            <b><i>Username:</i></b>  demo <br/>
            <b><i>Password:</i></b>  password
          </div>
        </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
