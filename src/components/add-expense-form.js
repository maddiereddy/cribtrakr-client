import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';
import { newExpense  } from '../actions/expenses';
import './dashboard.css';
import Input from './input';
import {Categories} from '../data';
import Textarea from './textarea';
import {required, nonEmpty, isTrimmed, isCurrency} from '../validators';

export class AddExpenseForm extends React.Component {

  onSubmit(values) {
    const username = this.props.username;
    let property = this.props.rentals.find(rental => {
      return rental.name === values.propName
    })
    if (!property) {
      property = this.props.rentals[0];
    }

    const expense = Object.assign({}, {user: username}, {propId: property.id}, 
      {propName: property.name}, {category: Categories[0].value}, values);

    return this.props.dispatch(newExpense(expense));
  }

  render() {
    let categories = Categories;
    const categoriesOptions = categories.map((category, index) => 
      <option key={index} value={category.value}>{category.value}</option>
    );

    const rentalsOptions = this.props.rentals.map((rental, index) => 
      <option key={index} value={rental.name}>{rental.name}</option>
    );

    return (
        <div>
          <form className="add-expense-form" id="edit-property-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
          
          <section className="property-details">
            <label htmlFor="propName">Property:</label>
            <Field component="select" name="propName" validate={[required, nonEmpty]}>{rentalsOptions}</Field>
            <label htmlFor="category">Category:</label>
            <Field component="select" name="category" validate={[required, nonEmpty]}>{categoriesOptions}</Field>
            <label htmlFor="date">Date of Service: </label>
            <Field component={Input} type="date" name="date" validate={[required, nonEmpty]} />
            <label htmlFor="amount">Expense: </label>
            <Field component={Input} type="text" name="amount" validate={[required, nonEmpty, isTrimmed, isCurrency]} />
            <label htmlFor="vendor">Vendor: </label>
            <Field component={Input} type="text" name="vendor" validate={[required, nonEmpty, isTrimmed]} />
            <label htmlFor="description">Description: </label>
            <Field component={Textarea} type="text" name="description" validate={[required, nonEmpty, isTrimmed]} /> 
          </section>
          <div>
            <button type="submit" disabled={this.props.pristine || this.props.submitting} >
              Add Expense
            </button>
            <Link to="/expenses"><button type="button">Back</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

AddExpenseForm = reduxForm({
    form: "addExpense",
    onSubmitFail: (errors, dispatch) => {
      console.log(`Error: ${JSON.stringify(errors)}`)
      dispatch(focus("addExpense", Object.keys(errors)[0]))
    }
})(AddExpenseForm);

export default AddExpenseForm;
