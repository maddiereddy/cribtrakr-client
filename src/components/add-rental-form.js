import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { newRental } from "../actions/rentals";
import "./dashboard.css";
import Input from "./input";

export class AddRentalForm extends React.Component {

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
  readURL = (event) => {
    let input = event.target
    let reader = new FileReader();
      
    reader.onload = () => {
      let dataURL = reader.result;
      let output = document.getElementById('output');
      output.src = dataURL;
    }

    if (input.files[0].size <= (1024 * 1024 * 1)){
      // reader.readAsDataURL(input.files[0]);
      // this.setState({selectedFile: input.files[0]})
    }
    else {
      alert("File size must under 1MB!");
    }
  }
	
  handleFileSelect = (e) => {
    e.preventDefault();
    this.fileSelector.click();
  }

  onSubmit(values) {
		const username = this.props.username;
    const rental = Object.assign({}, {user:username}, {imageURL: this.state.selectedFile}, values);
    return this.props.dispatch(newRental(rental));
  }

  render() {
    return (
      <div>
        <form className="add-rental-form" id="add-property-form"
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
              <label htmlFor="mortgage">Mortgage (per month):</label>
              <Field component={Input} type="text" name="mortgage" />
              <label htmlFor="pmi">PMI (per month):</label>
              <Field component={Input} type="text" name="pmi" />
              <label htmlFor="insurance">Insurance (per year):</label>
              <Field component={Input} type="text" name="insurance" />
              <label htmlFor="propertyTax">Property Tax (per year):</label>
              <Field component={Input} type="text" name="propertyTax" />
              <label htmlFor="hoa">HOA Fees (per month):</label>
              <Field component={Input} type="text" name="hoa" />
              <label htmlFor="managementFees">Management Fees (per month):</label>
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
              Add Rental Property
            </button>
					</div>
				</form>
      </div>
    );
  }
}

export default reduxForm({
  form: "addRental",
  // onSubmitFail: (errors, dispatch) => {
	// 	console.log(`Error: ${JSON.stringify(errors)}`)
	// 	dispatch(focus("addRental", Object.keys(errors)[0]))
	// }
})(AddRentalForm);
