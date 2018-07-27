import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { updateRental, fetchRental  } from '../actions/rentals';
import './dashboard.css';
import Input from './input';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

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
  
  // https://www.javascripture.com/FileReader#readAsDataURL
  readURL(event) {
    let input = event.target
    let reader = new FileReader();
      
    reader.onload = function () {
      let dataURL = reader.result;
      let output = document.getElementById('output');
      output.src = dataURL;

      this.setState({selectedFile: dataURL});
    };

    if (input.files[0].size <= (1024 * 1024 * 1))
      reader.readAsDataURL(input.files[0]);
    else {
      alert("File size must under 2MB!");
    }
  }
	
  handleFileSelect = (e) => {
    e.preventDefault();
    this.fileSelector.click();
  }

  onSubmit(values) {
    const rentalId = this.props.initialValues.id
    const username = this.props.username;
    const rental = Object.assign({}, {user: username}, {id:rentalId}, values);
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
              <label htmlFor="propertyTax">Property Tax:</label>
              <Field component={Input} type="text" name="propertyTax" />
              <label htmlFor="hoa">HOA Fees:</label>
              <Field component={Input} type="text" name="hoa" />
              <label htmlFor="managementFees">Management Fees:</label>
              <Field component={Input} type="text" name="managementFees" />
              <label htmlFor="misc">Miscellaneous:</label>
              <Field component={Input} type="text" name="misc" />
            </fieldset>
            <div className="upload-pic">
              <input id="selectedFile" type="file" accept="image/png, image/jpeg, image/jpg" onChange={this.readURL}/>
              <input type="button" value="Upload Image" onClick={this.handleFileSelect} />
              <br />
              <div className="pic-container">
                <img id="output" src={require("../images/home.png")} alt="Property" />
              </div>
            </div>
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
  state => ({ initialValues: state.rental.currentRental }),
  { load: fetchRental }
)(EditRentalForm);

export default EditRentalForm;