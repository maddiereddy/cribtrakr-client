import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';
import { updateRental, fetchRental  } from '../actions/rentals';
import './dashboard.css';
import Input from './input';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {required, nonEmpty,  zip, state, isTrimmed} from '../validators';

export class EditRentalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      selectedFile: null
    };
  }

  componentDidMount() {
    this.fileSelector = document.getElementById('selectedFile');
  }
  
  onSubmit(values) {  
      const rentalId = this.props.initialValues.id;
      const username = this.props.username;
      const rental = Object.assign({}, {user:username}, {id:rentalId}, values);
      return this.props.dispatch(updateRental(rental));
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

    const rentalImage = 
    ( this.props.initialValues.imageURL ?
      <img id="output" src={this.props.initialValues.imageURL} alt="Property"/>
      :
      <img id="output" src={require("../images/home.png")} alt="Property"/>
    )

    return (
        <div>
          <form className="edit-rental-form" id="edit-property-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
          
          <section className="property-details">
            <fieldset className="form-section">
              <legend>Address</legend>
              <Field component={Input} type="text" name="street" 
                validate={[required, nonEmpty, isTrimmed]} label="Street: "/>
              <Field component={Input} type="text" name="city" 
                validate={[required, nonEmpty, isTrimmed]} label="City: "/>
              <Field component={Input} type="text" name="state" 
                validate={[required, nonEmpty, isTrimmed, state]} label="State: "/>
             <Field component={Input} type="text" name="zip"  
                validate={[required, nonEmpty, isTrimmed, zip]} label="Zip: "/>
            </fieldset>
            <fieldset className="form-section">
              <legend>Expenses</legend>
              <Field component={Input} type="text" name="mortgage" label="Mortgage (per month): "/>
              <Field component={Input} type="text" name="pmi" label="PMI (per month): "/>
              <Field component={Input} type="text" name="insurance" label="Insurance (per year): "/>
              <Field component={Input} type="text" name="propertyTax" label="Property Tax (per year): "/>
              <Field component={Input} type="text" name="hoa" label="HOA Fees (per month): "/>
              <Field component={Input} type="text" name="managementFees" label="Management Fees (per month): "/>
              <Field component={Input} type="text" name="misc" label="Miscellaneous: "/>
            </fieldset>
            <div className="upload-pic">
              <br />
              <div className="pic-container">
                {rentalImage}
              </div>
            </div>
          </section>
          <div>
            <button type="submit" disabled={this.props.pristine || this.props.submitting} >
              Save Changes
            </button>
            <Link to="/dashboard"><button type="button">Back</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

EditRentalForm = reduxForm({
    form: "editRental",
    onSubmitFail: (errors, dispatch) => {
      console.log(`Error: ${JSON.stringify(errors)}`)
      dispatch(focus("editRental", Object.keys(errors)[0]))
    }
})(EditRentalForm);

EditRentalForm = connect(
  state => ({ initialValues: state.rental.currentRental }),
  { load: fetchRental }
)(EditRentalForm);

export default EditRentalForm;