import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
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
          <section className="property-details">
            <fieldset className="form-section">
              <legend>Address</legend>
              <label htmlFor="address-street">Street: </label>
              <input type="text" name="address-street" defaultValue="Main St." required />
              <label htmlFor="address-city">City: </label>
              <input type="text" name="address-city" defaultValue="Riverdale" required />
              <label htmlFor="address-state">State: </label>
              <input type="text" name="address-state" defaultValue="CA" required />
              <label htmlFor="address-zip">Zip: </label>
              <input type="text" name="address-zip" defaultValue="90210" required />
            </fieldset>
            <fieldset className="form-section">
              <legend>Expenses</legend>
              <label htmlFor="mortgage">Mortgage:</label>
              <input type="text" name="mortgage" defaultValue="$60000" required />
              <label htmlFor="pmi">PMI:</label>
              <input type="text" name="pmi" defaultValue="$0" required />
              <label htmlFor="insurance">Insurance:</label>
              <input type="text" name="insurance" defaultValue="$2000" required />
              <label htmlFor="property-tax">PropTax:</label>
              <input type="text" name="property-tax" defaultValue="$5000" required />
              <label htmlFor="hoa">HOA Fee:</label>
              <input type="text" name="hoa" defaultValue="$2000" required />
              <label htmlFor="mgmt-fees">Mgmt Fee:</label>
              <input type="text" name="mgmt-fees" defaultValue="$6000" required />
              <label htmlFor="misc">Misc:</label>
              <input type="text" name="misc" defaultValue="$0"/>
            </fieldset>
            <div className="upload-pic">
              <input id="selectedFile" type="file" onChange={readURL(this)}/>
              <input type="button" value="Upload Image" onClick={this.handleFileSelect} />
              <br />
              <div className="pic-container">
                <img src={require("../images/home.png")} alt="Property" />
              </div>
            </div>
          </section>
          <button type="button" onClick={this.props.history.goBack}>Back</button>
          <button type="submit">Save Changes</button>
          <Link to="/expenses"><button type="button">View Expenses</button></Link>
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