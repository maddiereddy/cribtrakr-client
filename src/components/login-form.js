import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import { Link } from 'react-router-dom';
import Input from './input';
// import {login} from '../actions/auth';
// import {required, nonEmpty} from '../validators';
import '../index.css';
import './dashboard.css';
import {setLoggedIn} from '../local-storage';

export class LoginForm extends React.Component {
  // onSubmit(values) {
  //     return this.props.dispatch(login(values.username, values.password));
  // }
  componentDidMount() {
    setLoggedIn(false);
  }

  onSubmit() {
    setLoggedIn(true);
  }

  render() {
    // let error;
    // if (this.props.error) {
    //     error = (
    //         <div className="form-error" aria-live="polite">
    //             {this.props.error}
    //         </div>
    //     );
    // }
    return (
      <div id="logIn">
        <header>
          <h2>Log In</h2>
        </header>
        <p><em>**Demo version**</em></p>
        <p>Use any login/password combo</p>
        <form className="login-form"
          // onSubmit={this.props.handleSubmit(values =>
          //     this.onSubmit(values)
          // )}
          >
          {/* {error} */}
          <label htmlFor="username">Username</label>
          <Field
            component={Input}
            type="text"
            name="username"
            id="username"
            // validate={[required, nonEmpty]}
          />
          <label htmlFor="password">Password</label>
          <Field
            component={Input}
            type="password"
            name="password"
            id="password"
            // validate={[required, nonEmpty]}
          />
          {/* <button disabled={this.props.pristine || this.props.submitting}>
              Log in
          </button> */}
          <Link to="/dashboard">
            <button id="logIn-button" onClick={this.onSubmit()}>Log in</button>
            {/* <button disabled={this.props.pristine || this.props.submitting}>Log in</button> */}
          </Link>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
