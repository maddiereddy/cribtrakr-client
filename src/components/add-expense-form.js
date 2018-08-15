import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { newExpense  } from '../actions/expenses';
import './dashboard.css';
import Input from './input';
import {Categories} from '../data';
import Textarea from './textarea';


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
            <Field component="select" name="propName" required>{rentalsOptions}</Field>
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
          </section>
          <div>
            <Link to="/expenses"><button type="button">Back</button></Link>
            <button type="submit" disabled={this.props.pristine || this.props.submitting} >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddExpenseForm = reduxForm({
    form: "addExpense",
    // onSubmitFail: (errors, dispatch) =>
    //     dispatch(focus('editRental', Object.keys(errors)[0]))
})(AddExpenseForm);
