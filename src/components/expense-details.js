import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import './dashboard.css';
import Header from './header';

export class ExpenseDetails extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    // this.fileSelector = document.getElementById('selectedFile');
  }

  // handleFileSelect = (e) => {
  //   e.preventDefault();
  //   this.fileSelector.click();
  // }

  render() {
    return (
      <div className="dashboard">
        <Header title='View/Edit Expense' />
        <section>
          <form id="add-expense-form">
            <section className="expense-form-section">
              <label htmlFor="property">Property:</label>
                <select name="property" required>
                  <option value="Property1" defaultValue>Property 1</option>
                  <option value="Property2">Property 2</option>
                  <option value="Property3">Property 3</option>
                </select>
              
              <label htmlFor="category">Category:</label>
                <select name="category" required>
                  <option value="advertising">Advertising</option>
                  <option value="travel">Auto and Travel</option>
                  <option value="cleaning" defaultValue>Cleaning and Maintenance</option>
                  <option value="commissions">Commissions</option>
                  <option value="fines">Fines</option>
                  <option value="insurance">Insurance</option>
                  <option value="legal">Legal and other Professional Fees</option>
                  <option value="management">Management Fees</option>
                  <option value="mortgage">Mortgage Interest</option>
                  <option value="otherInterest">Other Interest</option>
                  <option value="repairs">Repairs</option>
                  <option value="supplies">Supplies</option>
                  <option value="taxes">Taxes</option>
                  <option value="utilities">Utilities</option>
                  <option value="yardwork">Yard Work</option>
                  <option value="other">Other</option>
                </select>
              
              <label htmlFor="amount">Amount:</label>
              <input type="text" name="amount" defaultValue="$500" required />
              <label htmlFor="vendor">Vendor:</label>
              <input type="text" name="vendor" defaultValue="Acme Services"  />
              <label htmlFor="description">Descr:</label>
              <textarea name="description" defaultValue="Some exciting service provided by the roadrunner!"></textarea>
              <label htmlFor="date">Date:</label>
              <input type="date" name="date" defaultValue="June 20, 2018" required />
              {/* <div className="upload-pic">
                <input id="selectedFile" type="file" onChange={readURL(this)}/>
                <input type="button" value="Upload Image" onClick={this.handleFileSelect} />
                <br />
                <div className="pic-container">
                  <img src={require("../images/receipt.png")} alt="Receipt" />  
                </div>
              </div> */}
            </section>
            <button type="button" onClick={this.props.history.goBack}>Back</button>
            <button type="submit">Save Changes</button>
          </form>
        </section>
      </div>
    );
  };
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      username: state.auth.currentUser.username,
      name: `${currentUser.firstName} ${currentUser.lastName}`,
      protectedData: state.protectedData.data
  };
};
  
export default requiresLogin()(connect(mapStateToProps)(ExpenseDetails));