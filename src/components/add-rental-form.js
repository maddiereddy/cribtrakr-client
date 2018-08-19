import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import { Link } from "react-router-dom";
import { newRental } from "../actions/rentals";
import "./dashboard.css";
import Input from "./input";
import { API_BASE_URL } from '../config';
import {required, nonEmpty, zip, state, isTrimmed} from '../validators';

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

    if (input.files[0].size <= (1024 * 1024 * 2)){
      reader.readAsDataURL(input.files[0]);
      this.setState({selectedFile: input.files[0]})
    }
    else {
      alert("File size must under 1MB!");
    }
  }
	
  handleFileSelect = (e) => {
    e.preventDefault();
    this.fileSelector.click();
  }

  removeSpecialChars = (str) => {
    return str.replace(/(?!\w|\s)/g, '')
    .replace(/\s+/g, '')
    .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
  }

  onSubmit(values) {
    // https://medium.com/@fabianopb/upload-files-with-node-and-react-to-aws-s3-in-3-steps-fdaa8581f2bd
    if (this.state.selectedFile) {
      const formData = new FormData();
      const fileName = `${this.props.username}-${values.street}-${this.state.selectedFile.name}`;
      const cleanFileName = this.removeSpecialChars(fileName);

      formData.append('file', this.state.selectedFile);
      formData.append('name', cleanFileName);

      return fetch(`${API_BASE_URL}/rentals/upload`, {
          method: 'POST',
          body: formData
      }).then(response => {
        // handle your response;
        const username = this.props.username;
        const url = `https://s3-us-west-1.amazonaws.com/cribtrakr/rentalsBucket/${cleanFileName}`;
        const rental = Object.assign({}, {user:username}, {imageURL: url}, values);
        return this.props.dispatch(newRental(rental));

      }).catch(error => {
        // handle your error
        alert(`Error uploading file to AWS: ${error}`);
      });
    } else {
      const username = this.props.username;
      const rental = Object.assign({}, {user:username}, values);
      return this.props.dispatch(newRental(rental));
    }
  }

  render() {
    return (
      <div>
        <form className="add-rental-form" id="add-property-form" aria-label="add property form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >

					<section className="property-details">
            <fieldset className="form-section">
              <legend>Address</legend>
              <Field component={Input} type="text" name="street" 
                validate={[required, nonEmpty, isTrimmed]} 
                label="Street: "
                />
              <Field component={Input} type="text" name="city" 
                validate={[required, nonEmpty, isTrimmed]} 
                label="City: "
                />
              <Field component={Input} type="text" name="state" 
                validate={[required, nonEmpty, isTrimmed, state]} 
                label="State: "
                />
              <Field component={Input} type="text" name="zip"  
                validate={[required, nonEmpty, isTrimmed, zip ]} 
                label="Zip: "
                />
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
              <div className="pic-container">
                <img id="output" src={require("../images/home.png")} alt="Property" />
              </div>
              <input aria-label="Select an image file for upload" id="selectedFile" type="file" 
                accept="image/png, image/jpeg, image/jpg" onChange={this.readURL}/>
              <input type="button" value="Upload Image" onClick={this.handleFileSelect} />
            </div>
          </section>
					<div>
            <button type="submit" disabled={this.props.pristine || this.props.submitting} >
              Add Rental Property
            </button>
						<Link to="/dashboard"><button type="button">Back</button></Link>
					</div>
				</form>
      </div>
    );
  }
}

export default reduxForm({
  form: "addRental",
  onSubmitFail: (errors, dispatch) => {
		console.log(`Error: ${JSON.stringify(errors)}`)
		dispatch(focus("addRental", Object.keys(errors)[0]))
	}
})(AddRentalForm);
