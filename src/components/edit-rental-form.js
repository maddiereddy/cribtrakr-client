import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { updateRental, fetchRental  } from '../actions/rentals';
import './dashboard.css';
import Input from './input';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { readURL } from './upload';

export class EditRentalForm extends React.Component {
  onSubmit(values) {
    const rentalId = this.props.initialValues.id
    const username = this.props.username;
    const rental = Object.assign({}, { user: username }, {id:rentalId}, values);
    return this.props.dispatch(updateRental(rental))
  }
  render() {
    //redux form used to update rental content
    if (this.props.submitSucceeded === true ) {
      return (
        <div>
          {/* <Redirect to={`/edit-rental/${this.props.initialValues.id}`} /> */}
          <Redirect to={`/dashboard`} />
        </div>
      )
    }  

    return (
        <div>
          <form className="edit-rental-form" id="edit-property-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
          
          <section className="property-details">
            <fieldset className="form-section">
              <legend>Address</legend>
              <label htmlFor="street">Street: </label>
              <Field component={Input} type="text" name="street" readOnly='true' required />
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
              <label htmlFor="propertyTax">Property Tax:</label>
              <Field component={Input} type="text" name="propertyTax" />
              <label htmlFor="hoa">HOA Fees:</label>
              <Field component={Input} type="text" name="hoa" />
              <label htmlFor="managementFees">Management Fees:</label>
              <Field component={Input} type="text" name="managementFees" />
              <label htmlFor="misc">Miscellaneous:</label>
              <Field component={Input} type="text" name="misc" />
            </fieldset>
            {/* <div className="upload-pic">
              <input id="selectedFile" type="file" onChange={readURL(this)}/>
              <input type="button" value="Upload Image" onClick={this.handleFileSelect} />
              <br />
              <div className="pic-container">
                <img src={require("../images/home.png")} alt="Property" />
              </div>
            </div> */}
          </section>
          <div>
            <Link to="/dashboard"><button type="button">Back</button></Link>
            <button type="submit" disabled={this.props.pristine || this.props.submitting} >
              Save Changes
            </button>
            <Link to="/expenses"><button type="button">View Expenses</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

EditRentalForm = reduxForm({
    form: "editRental",
    // onSubmitFail: (errors, dispatch) =>
    //     dispatch(focus('editRental', Object.keys(errors)[0]))
})(EditRentalForm);

EditRentalForm = connect(
  state => ({ initialValues: state.rental.currentRental }), // pull initial values from account reducer
  { load: fetchRental } // bind account loading action creator
)(EditRentalForm);

export default EditRentalForm;