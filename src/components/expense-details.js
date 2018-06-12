import React from 'react';
import Header from './header';

export default function ExpenseDetails(props) {
    return (
      <div className="dashboard">
        <Header title='View/Edit Expense' />
        <section>
          <form id="add-expense">
            <section class="expense-form-section">
              <p><label for="property">Property: </label>
                <select name="property" required>
                  <option value="Property1">Property 1</option>
                  <option value="Property2">Property 2</option>
                  <option value="Property3">Property 3</option>
                </select>
              </p>
              <p><label for="category">Category: </label>
                <select name="category" required>
                  <option value="select" selected>Select Category</option>
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
              <p><label for="amount">Amount: </label>
              <input type="text" name="amount" required /></p>
              <p><label for="vendor">Vendor Name: </label>
              <input type="text" name="vendor" /></p>
              <p><label for="description">Description: </label>
              <textarea name="description"></textarea></p>
              <p><label for="date">Date of Payment: </label>
              <input type="date" name="date" required /></p>
              <p><input id="selectedFile" type="file" onchange="readURL(this);" />
              <input type="button" value="Upload Receipt" onclick="document.getElementById('selectedFile').click();" />
              <br />
              <img id="bill-pic" src={require("./receipt.png")} alt="Receipt" />
              </p>
            </section>
            <button type="button">Back</button>
            <button type="submit">Save Changes</button>
          </form>
        </section>
      </div>
    );
};

ExpenseDetails.defaultProps = {
    name: '',
    image: '',
};