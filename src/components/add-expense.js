import React from 'react';
// import {connect} from 'react-redux';
// import requiresLogin from './requires-login';
// import {fetchProtectedData} from '../actions/protected-data';
import './dashboard.css';
import Header from './header';
import { readURL } from './upload';

export class AddExpense extends React.Component {
  componentDidMount() {
    // this.props.dispatch(fetchProtectedData());
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
        <form id="add-expense">
          <section className="expense-form-section">
            <p><label htmlFor="property">Property: </label>
              <select name="property" required>
                <option value="Property1">Property 1</option>
                <option value="Property2">Property 2</option>
                <option value="Property3">Property 3</option>
              </select>
            </p>
            <p><label htmlFor="category">Category: </label>
              <select name="category" required>
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
            </p>
            <p><label htmlFor="amount">Amount: </label>
            <input type="text" name="amount" required /></p>
            <p><label htmlFor="vendor">Vendor Name: </label>
            <input type="text" name="vendor" /></p>
            <p><label htmlFor="description">Description: </label>
            <textarea name="description"></textarea></p>
            <p><label htmlFor="date">Date of Payment: </label>
            <input type="date" name="date" required /></p>
            <p>
              <input id="selectedFile" type="file" onChange={readURL(this)}/>
              <input type="button" value="Upload image" onClick={this.handleFileSelect} />
              <br />
              <img id="bill-pic" src={require("../images/receipt.png")} alt="Receipt" />  
            </p>
          </section>
          <button type="button" onClick={this.props.history.goBack}>Back</button>
          <button type="submit">Save Expense</button>
        </form>
      </section>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//     // const {currentUser} = state.auth;
//     // return {
//     //     username: state.auth.currentUser.username,
//     //     name: `${currentUser.firstName} ${currentUser.lastName}`,
//     //     protectedData: state.protectedData.data
//     // };
// };

// export default requiresLogin()(connect(mapStateToProps)(AddExpense));

export default (AddExpense);