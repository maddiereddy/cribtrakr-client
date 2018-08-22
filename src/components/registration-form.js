import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import './dashboard.css';

const passwordLength = length({min: 6, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const {username, password, firstName, lastName} = values;
    const user = {username, password, firstName, lastName};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <div >
        <form className="login-form" aria-label="Registration form" aria-live="assertive"
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <Field component={Input} type="text" name="firstName" 
            validate={[required, nonEmpty, isTrimmed]}
            label="First name"
          />
          <Field component={Input} type="text" name="lastName" 
            validate={[required, nonEmpty, isTrimmed]}
            label="Last name"
          />
          <Field component={Input} type="text" name="username"
            validate={[required, nonEmpty, isTrimmed]}
            label="Username"
          />
          <Field component={Input} type="password" name="password"
            validate={[required, passwordLength, isTrimmed]}
            label="Password"
          />
          <Field component={Input} type="password" name="passwordConfirm"
            validate={[required, nonEmpty, matchesPassword]}
            label="Confirm password"
          />
          <button
            type="submit" aria-label="Register"
            disabled={this.props.pristine || this.props.submitting}>
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
