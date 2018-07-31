import React from 'react';
// import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
// import { updateExpense, fetchExpense  } from '../actions/expenses';
import './dashboard.css';
// import Input from './input';
// import { Redirect } from 'react-router-dom';
// import {connect} from 'react-redux';
import Moment from 'react-moment';
import 'moment-timezone';
import {Categories} from '../data';


export class EditExpenseForm extends React.Component {
  
  // onSubmit(values) {
  //   const expenseId = this.props.initialValues.id
  //   const username = this.props.username;
  //   const expense = Object.assign({}, {user: username}, {id:expenseId}, values);
  //   return this.props.dispatch(updateExpense(expense))
  // }
  render() {
    const values = this.props.initialValues;
    
    const rentalsOptions = this.props.rentals.map((rental, index) => 
      <option key={index} value={rental.name}>{rental.name}</option>
    );
    
    let categories = Categories;
    const categoriesOptions = categories.map((category, index) => 
      <option key={index} value={category.value}>{category.value}</option>
    );
    //redux form used to update rental content
    // if (this.props.submitSucceeded === true ) {
    //   return (
    //     <div>
    //       {/* <Redirect to={`/edit-rental/${this.props.initialValues.id}`} /> */}
    //       <Redirect to={`/expenses`} />
    //     </div>
    //   )
    // }  

    return (
        <div>
          {/* <form className="edit-expense-form" id="edit-property-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} > */}
          
          <section className="property-details">
            <fieldset className="form-section">
            <label htmlFor="property">Property:</label>
            <select className="drop-down" name="property" defaultValue={values.propName} required>
              {rentalsOptions}
            </select>
            <label htmlFor="category">Category:</label>
            <select className="drop-down" name="category" defaultValue={values.category} required>
              {categoriesOptions}
            </select>
            <p className="date"><b><em>Date of Service: </em></b><Moment tz="America/Los_Angeles" aria-hidden="true" format="MMM DD, YYYY">{values.date}</Moment></p>
            <p className="expense"><b><em>Expense: </em></b>{values.amount}</p>
            <p className="vendor"><b><em>Vendor: </em></b>{values.vendor}</p>
            <p className="description"><b><em>Description: </em></b>{values.description}</p>
            </fieldset>
            
          </section>
          <div>
            <Link to="/expenses"><button type="button">Back</button></Link>
            {/* <button type="submit" disabled={this.props.pristine || this.props.submitting} >
              Save Changes
            </button> */}
          </div>
        {/* </form> */}
      </div>
    );
  }
}

// EditExpenseForm = reduxForm({
//     form: "editRental",
//     // onSubmitFail: (errors, dispatch) =>
//     //     dispatch(focus('editRental', Object.keys(errors)[0]))
// })(EditExpenseForm);

// EditExpenseForm = connect(
  // state => ({ initialValues: state.expense.currentExpense }),
  // { load: fetchExpense }
// )(EditExpenseForm);

EditExpenseForm.defaultProps = {
  date: '',
  vendor: '',
  amount: '',
  description: '',
  propName: '',
  category: '',
  initialValues: []
};

export default EditExpenseForm;