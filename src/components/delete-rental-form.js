import React from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { deleteRental, fetchRental  } from '../actions/rentals';
import './dashboard.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export class DeleteRentalForm extends React.Component {
  onSubmit(values) {
    const rentalId = this.props.initialValues.id
    const username = this.props.username;
    const rental = Object.assign({}, { user: username }, { id: rentalId }, values);
    return this.props.dispatch(deleteRental(rental))
  }
  render() {
    //redux form used to update rental content
    if (this.props.submitSucceeded === true ) {
      return (
        <div>
          <Redirect to={`/dashboard`} />
        </div>
      )
    }  

    return (
        <div>
          <form className="delete-rental-form" id="delete-property-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
          
          <section className="property-details">
            <h4><b>
              <span>{this.props.initialValues.street}</span> <br/>
              <span>{this.props.initialValues.city}</span>,  
              <span> {this.props.initialValues.state}</span> 
              <span> {this.props.initialValues.zip}</span> <br/>
            </b></h4>
            {/* <fieldset className="form-section">
              <legend>Address</legend>
              <label htmlFor="street">Street: </label>
              <Field component={Input} type="text" name="street" required />
              <label htmlFor="city">City: </label>
              <Field component={Input} type="text" name="city" required />
              <label htmlFor="state">State: </label>
              <Field component={Input} type="text" name="state" required />
              <label htmlFor="zip">Zip: </label>
              <Field component={Input} type="text" name="zip"  required />
            </fieldset>
            <fieldset className="form-section">
              <legend>Expenses</legend>
              <label htmlFor="mortgage">Mortgage:</label>
              <Field component={Input} type="text" name="mortgage" />
              <label htmlFor="pmi">PMI:</label>
              <Field component={Input} type="text" name="pmi" />
              <label htmlFor="insurance">Insurance:</label>
              <Field component={Input} type="text" name="insurance" />
              <label htmlFor="propertyTax">Prop Tax:</label>
              <Field component={Input} type="text" name="propertyTax" />
              <label htmlFor="hoa">HOA Fee:</label>
              <Field component={Input} type="text" name="hoa" />
              <label htmlFor="managementFees">Mgmt Fee:</label>
              <Field component={Input} type="text" name="managementFees" />
              <label htmlFor="misc">Misc:</label>
              <Field component={Input} type="text" name="misc" />
            </fieldset> */}
           </section>
          <div>
            <Link to="/dashboard"><button type="button">No, go back</button></Link>
            <button type="submit" >Yes, delete property</button>
          </div>
        </form>
      </div>
    );
  }
}

DeleteRentalForm = reduxForm({
    form: "deleteRental",
    // onSubmitFail: (errors, dispatch) =>
    //     dispatch(focus('editRental', Object.keys(errors)[0]))
})(DeleteRentalForm);

DeleteRentalForm = connect(
  state => ({ initialValues: state.rental.currentRental }), // pull initial values from account reducer
  { load: fetchRental } // bind account loading action creator
)(DeleteRentalForm);

export default DeleteRentalForm;