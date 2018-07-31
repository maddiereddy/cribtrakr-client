import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { updateExpense, fetchExpense  } from '../actions/expenses';
import './dashboard.css';
import Input from './input';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {Categories} from '../data';
import Textarea from './textarea';


export class EditExpenseForm extends React.Component {
  
  onSubmit(values) {
    const expenseId = this.props.initialValues.id
    const username = this.props.username;
    const expense = Object.assign({}, {user: username}, {id:expenseId}, values);
    return this.props.dispatch(updateExpense(expense))
  }

  render() {
    let categories = Categories;
    const categoriesOptions = categories.map((category, index) => 
      <option key={index} value={category.value}>{category.value}</option>
    );

    // redux form used to update rental content
    if (this.props.submitSucceeded === true ) {
      return (
        <div>
          <Redirect to={`/expenses`} />
        </div>
      )
    }  

    return (
        <div>
          <form className="edit-expense-form" id="edit-property-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
          
          <section className="property-details">
            <fieldset className="form-section">
              <label htmlFor="propName">Property:</label>
              <Field component="input" type="text" readOnly="true" name="propName" required />
              <label htmlFor="category">Category:</label>
              <Field component="select" name="category" required>{categoriesOptions}</Field>
              <label htmlFor="date">Date of Service: </label>
              <Field component="input" type="date" name="date" required />
              <label htmlFor="amount">Expense: </label>
              <Field component={Input} type="text" name="amount" required />
              <label htmlFor="vendor">Vendor: </label>
              <Field component={Input} type="text" name="vendor" required />
              <label htmlFor="description">Description: </label>
              <Field component={Textarea} type="text" name="description" required />
            </fieldset>
          </section>
          <div>
            <Link to="/expenses"><button type="button">Back</button></Link>
            <button type="submit" disabled={this.props.pristine || this.props.submitting} >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    );
  }
}

EditExpenseForm = reduxForm({
    form: "editRental",
    // onSubmitFail: (errors, dispatch) =>
    //     dispatch(focus('editRental', Object.keys(errors)[0]))
})(EditExpenseForm);

EditExpenseForm = connect(
  state => ({ initialValues: state.expense.currentExpense }),
  { load: fetchExpense }
)(EditExpenseForm);

export default EditExpenseForm;