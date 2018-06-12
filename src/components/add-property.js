import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import './dashboard.css';
import Header from './header';
import { readURL } from './upload';

export class AddProperty extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.fileSelector = document.getElementById('selectedFile');
  }

  handleFileSelect = (e) => {
    e.preventDefault();
    this.fileSelector.click();
  }

  render() {
    return (
      <div className="dashboard">
        <Header title='Add New Property' />
        <section>
        <form id="add-property">
          <section className="property-details">
            <fieldset className="form-section">
              <legend>Address</legend>
              <p><label htmlFor="address-street">Street: </label><input type="text" name="address-street" required /></p>
              <p><label htmlFor="address-city">City: </label><input type="text" name="address-city" required />
              <label htmlFor="address-state">State: </label><input type="text" name="address-state" required />
              <label htmlFor="address-zip">Zip: </label><input type="text" name="address-zip"  required /></p>
            </fieldset>
            <fieldset className="form-section">
              <legend>Expenses</legend>
              <p><label htmlFor="mortgage">Mortgage Amount: </label><input type="text" name="mortgage" required />
              <label htmlFor="insurance">Insurance Amount: </label><input type="text" name="insurance" required /></p>
              <p><label htmlFor="property-tax">Property Tax: </label><input type="text" name="property-tax" required />
              <label htmlFor="hoa">HOA Fees: </label><input type="text" name="hoa" required /></p>
              <p><label htmlFor="mgmt-fees">Property Management Fees: </label><input type="text" name="mgmt-fees" required />
              <label htmlFor="misc">Miscellaneous: </label><input type="text" name="misc" /></p>
            </fieldset>
            <div className="upload-pic">
              <input id="selectedFile" type="file" onChange={readURL(this)}/>
              <input type="button" value="Upload image" onClick={this.handleFileSelect} />
              <br />
              <img id="property-pic" src={require("../images/home.png")} alt="Property" />
            </div>
            <button type="button" onClick={this.props.history.goBack}>Back</button>
            <button type="submit">Save Property</button>
          </section>
        </form>
      </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(AddProperty));