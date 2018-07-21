import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { newRental } from "../actions/rentals";
import "./dashboard.css";
import Input from "./input";
// import { readURL } from './upload';

export class AddForm extends React.Component {
	//form used to post a rental property
	componentDidMount() {
    this.fileSelector = document.getElementById('selectedFile');
	}
	
  // handleFileSelect = (e) => {
  //   e.preventDefault();
  //   this.fileSelector.click();
  // }

  onSubmit(values) {
		const username = this.props.username;
    const rental = Object.assign({}, { user:username }, values);
    return this.props.dispatch(newRental(rental));
  }

  render() {
    return (
      <div>
        <form className="rental-form" id="add-property-form"
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
              <Field component={Input} type="text" name="mortgage" value='$0.00'/>
              <label htmlFor="pmi">PMI:</label>
              <Field component={Input} type="text" name="pmi" value='$0.00'/>
              <label htmlFor="insurance">Insurance:</label>
              <Field component={Input} type="text" name="insurance" value='$0.00' />
              <label htmlFor="propertyTax">Prop Tax:</label>
              <Field component={Input} type="text" name="propertyTax" value='$0.00' />
              <label htmlFor="hoa">HOA Fee:</label>
              <Field component={Input} type="text" name="hoa" value='$0.00'/>
              <label htmlFor="managementFees">Mgmt Fee:</label>
              <Field component={Input} type="text" name="managementFees" value='$0.00'/>
              <label htmlFor="misc">Misc:</label>
              <Field component={Input} type="text" name="misc" value='$0.00'/>
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
              Add Rental Property
            </button>
					</div>
				</form>
      </div>
    );
  }
}

export default reduxForm({
  form: "rental",
  // onSubmitFail: (errors, dispatch) => {
	// 	console.log(`Error: ${JSON.stringify(errors)}`)
	// 	dispatch(focus("rental", Object.keys(errors)[0]))
	// }
})(AddForm);
