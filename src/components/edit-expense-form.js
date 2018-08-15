import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';
import { updateExpense, fetchExpense } from '../actions/expenses';
import './dashboard.css';
import Input from './input';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {Categories} from '../data';
import Textarea from './textarea';
import {required, nonEmpty, isTrimmed, isCurrency} from '../validators';


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
            <label htmlFor="propName">Property:</label>
            <Field component="input" type="text" readOnly="true" name="propName" required />
            <label htmlFor="category">Category:</label>
            <Field component="select" name="category" validate={[required]} >{categoriesOptions}</Field>
            <label htmlFor="date">Date of Service: </label>
            <Field component="input" type="date" name="date" validate={[required]} />
            <label htmlFor="amount">Expense: </label>
            <Field component={Input} type="text" name="amount" validate={[required, nonEmpty, isTrimmed, isCurrency]} />
            <label htmlFor="vendor">Vendor: </label>
            <Field component={Input} type="text" name="vendor" validate={[required, nonEmpty, isTrimmed]} />
            <label htmlFor="description">Description: </label>
            <Field component={Textarea} type="text" name="description" validate={[required, nonEmpty, isTrimmed]} />
          </section>
          <div>
            <button type="submit" disabled={this.props.pristine || this.props.submitting} >
              Save Changes
            </button>
            <Link to="/expenses"><button type="button">Back</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

EditExpenseForm = reduxForm({
    form: "editExpense",
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('editExpense', Object.keys(errors)[0]))
})(EditExpenseForm);

EditExpenseForm = connect(
  state => ({ initialValues: state.expense.currentExpense }),
  { load: fetchExpense }
)(EditExpenseForm);

export default EditExpenseForm;