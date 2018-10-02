import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import RegistrationForm from './registration-form';
import './dashboard.css';

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div id="home-section" className="home" aria-label="registration section">
      {/* <section className="title">
        <h1>Welcome to CribTrakr</h1>
      </section> */}
      <section className="register-section">
        <h2 className="loginTitle">Register</h2>
        <RegistrationForm />
      </section>
      <div className="register-text">Already have an account?
        <Link to="/"> <span className="register-link">Login</span></Link>
      </div>
      <div className="to-top"><a href="#home-section" aria-label="to top of page">[ Back to Top ]</a></div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
