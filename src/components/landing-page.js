import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import About from './about';
import LoginForm from './login-form';
import {captions} from '../data';
import './dashboard.css';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
      return <Redirect to="/dashboard" />;
  }

  return (
    <div id="home-section" className="home">
      <section className="title">
        <h1>Welcome to CribTrakr</h1>
      </section>
      <About key={0} {...captions[0]} />
      <About key={1} {...captions[1]} />
      <About key={2} {...captions[2]} />
      <section className="login-section">
        <h2 className="loginTitle">Login</h2>
        <div className="demo-credentials" aria-label="demo credentials">
            <span><u>Demo Credentials</u></span><br/>
            <p>Username: <i>demo  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i> </p>
            <p>Password: <i>password</i> </p>
        </div>
        <LoginForm />
      </section>
      <div role="region" className="register-text">Don't have an account?
        <Link to="/register"> <span className="register-link">Register</span></Link>
      </div>
      <div role="region" aria-label="to top of page" className="to-top">
        <a href="#home-section" >[ Back to Top ]</a>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
