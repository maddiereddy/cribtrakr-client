import React from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { deleteExpense, fetchExpense } from '../actions/expenses';
import './dashboard.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export class DeleteExpenseForm extends React.Component {
  onSubmit(values) {
    const expenseId = this.props.initialValues.id
    const username = this.props.username;
    const expense = Object.assign({}, { user: username }, { id: expenseId }, values);
    return this.props.dispatch(deleteExpense(expense))
  }

  render() {
    //redux form used to update rental content
    if (this.props.submitSucceeded === true ) {
      return (
        <div>
          <Redirect to={`/expenses`} />
        </div>
      )
    }  
    
    return (
      <div>
        <form className="delete-expense-form" id="delete-property-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
        
          <section className="property-details">
            <h4 className="delete-expense"><b>
              <span><u>Property</u>: {this.props.initialValues.propName}</span> <br/>
              <span><u>Category</u>: {this.props.initialValues.category}</span> <br/> 
              <span><u>Amount</u>: {this.props.initialValues.amount}</span> <br/>
              <span><u>Vendor</u>: {this.props.initialValues.vendor}</span> <br/>
              <span><u>Date of Service</u>: {this.props.initialValues.date}</span> <br/>
              <span><u>Description</u>: {this.props.initialValues.description}</span> <br/>
            </b></h4>
          </section>
          <div>
            <button type="submit" >Yes, delete expense</button>
            <Link to="/expenses"><button type="button">No, go back</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

DeleteExpenseForm = reduxForm({
    form: "deleteExpense",
    // onSubmitFail: (errors, dispatch) =>
    //     dispatch(focus('editRental', Object.keys(errors)[0]))
})(DeleteExpenseForm);

DeleteExpenseForm = connect(
  state => ({ initialValues: state.expense.currentExpense }), // pull initial values from account reducer
  { load: fetchExpense } // bind account loading action creator
)(DeleteExpenseForm);

export default DeleteExpenseForm;