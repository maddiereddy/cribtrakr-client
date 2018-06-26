import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import './dashboard.css';
import Header from './header';
import { readURL } from './upload';

export class AddExpense extends React.Component {
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
        <Header title='Add New Expense' />
        <section>
        <form id="add-expense-form">
          <section className="expense-details">
            <label htmlFor="property">Property:</label>
            <select className="drop-down" name="property" required>
              <option value="select" defaultValue>Select Property</option>
              <option value="Property1">Property 1</option>
              <option value="Property2">Property 2</option>
              <option value="Property3">Property 3</option>
            </select>
            
            <label htmlFor="category">Category:</label>
            <select className="drop-down" name="category" required>
              <option value="select" defaultValue>Select Category</option>
              <option value="advertising">Advertising</option>
              <option value="travel">Auto and Travel</option>
              <option value="cleaning">Cleaning and Maintenance</option>
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
            <input type="text" name="amount" required />
            <label htmlFor="vendor">Vendor:</label>
            <input type="text" name="vendor" />
            <label htmlFor="description">Descr:</label>
            <textarea name="description"></textarea>
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" required />
            <div className="upload-pic">
              <input id="selectedFile" type="file" onChange={readURL(this)}/>
              <input type="button" value="Upload Image" onClick={this.handleFileSelect} />
              <br />
              <div className="pic-container">
                <img src={require("../images/receipt.png")} alt="Receipt" />  
              </div>
            </div>
          </section>
          <button type="button" onClick={this.props.history.goBack}>Back</button>
          <button type="submit">Save Expense</button>
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

export default requiresLogin()(connect(mapStateToProps)(AddExpense));