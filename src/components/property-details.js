import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import './dashboard.css';
import Header from './header';
import { readURL } from './upload';

export class PropertyDetails extends React.Component {
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
        <Header title='Property Details' />
        <section>
        <form id="add-property">
          <section class="property-details">
            <fieldset class="form-section">
              <legend>Address</legend>
              <p><label for="address-street">Street: </label><input type="text" name="address-street" required /></p>
              <p><label for="address-city">City: </label><input type="text" name="address-city" required />
              <label for="address-state">State: </label><input type="text" name="address-state" required />
              <label for="address-zip">Zip: </label><input type="text" name="address-zip"  required /></p>
            </fieldset>
            <fieldset class="form-section">
              <legend>Expenses</legend>
              <p><label for="mortgage">Mortgage Amount: </label><input type="text" name="mortgage" required />
              <label for="insurance">Insurance Amount: </label><input type="text" name="insurance" required /></p>
              <p><label for="property-tax">Property Tax: </label><input type="text" name="property-tax" required />
              <label for="hoa">HOA Fees: </label><input type="text" name="hoa" required /></p>
              <p><label for="mgmt-fees">Property Management Fees: </label><input type="text" name="mgmt-fees" required />
              <label for="misc">Miscellaneous: </label><input type="text" name="misc" /></p>
            </fieldset>
            <div className="upload-pic">
              <input id="selectedFile" type="file" onChange={readURL(this)}/>
              <input type="button" value="Upload image" onClick={this.handleFileSelect} />
              <br />
              <img id="property-pic" src={require("../images/home.png")} alt="Property" />
            </div>
            
            <button type="button">Back</button>
            <button type="submit">Save Changes</button>
            <a href="/expenses"><button type="button">View Expenses</button></a>
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

export default requiresLogin()(connect(mapStateToProps)(PropertyDetails));