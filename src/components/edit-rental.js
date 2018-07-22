import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchRental} from '../actions/rentals';
import './dashboard.css';
import Header from './header';
import { readURL } from './upload';

export class EditRental extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchRental(this.props.match.params.id));
    this.fileSelector = document.getElementById('selectedFile');
  }

  // onSubmit(values) {
  //   const rentalId = this.props.currentRental.id
  //   const rental = Object.assign({}, {rentalId}, values);
  //   return this.props
  //   this.props.dispatch(updateRental(rental));
  // }

  handleFileSelect = (e) => {
    e.preventDefault();
    this.fileSelector.click();
  }

  render() {
    if (this.props.loading) 
      return <div id="loading"><img src="../images/ajax-loader.gif" alt="Loading..."/></div>;
    
    const rental = this.props.currentRental;
    if (!rental) {
      return <div id="loading"><img src="../images/ajax-loader.gif" alt="Loading..."/></div>;
    }

    return (
      <div className="dashboard">
        <Header title='Property Details' />
        <section>
        <form id="add-property">
          <section className="property-details">
            <fieldset className="form-section">
              <legend>Address</legend>
              <label htmlFor="address-street">Street: </label>
              <input type="text" name="address-street" defaultValue={rental.street} required />
              <label htmlFor="address-city">City: </label>
              <input type="text" name="address-city" defaultValue={rental.city} required />
              <label htmlFor="address-state">State: </label>
              <input type="text" name="address-state" defaultValue={rental.state} required />
              <label htmlFor="address-zip">Zip: </label>
              <input type="text" name="address-zip" defaultValue={rental.zip} required />
            </fieldset>
            <fieldset className="form-section">
              <legend>Expenses</legend>
              <label htmlFor="mortgage">Mortgage:</label>
              <input type="text" name="mortgage" defaultValue={rental.mortgage} required />
              <label htmlFor="pmi">PMI:</label>
              <input type="text" name="pmi" defaultValue={rental.pmi} required />
              <label htmlFor="insurance">Insurance:</label>
              <input type="text" name="insurance" defaultValue={rental.insurance} required />
              <label htmlFor="property-tax">PropTax:</label>
              <input type="text" name="property-tax" defaultValue={rental.propertyTax} required />
              <label htmlFor="hoa">HOA Fee:</label>
              <input type="text" name="hoa" defaultValue={rental.hoa} required />
              <label htmlFor="mgmt-fees">Mgmt Fee:</label>
              <input type="text" name="mgmt-fees" defaultValue={rental.managementFees} required />
              <label htmlFor="misc">Misc:</label>
              <input type="text" name="misc" defaultValue={rental.misc}/>
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
          <Link to="/dashboard"><button type="button">Back</button></Link>
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
    protectedData: state.protectedData.data,
    currentRental: state.rental.currentRental,
    loading: state.rental.loading
  };
};

export default requiresLogin()(connect(mapStateToProps)(EditRental));