import React from 'react';
import './dashboard.css';

export default function SearchForm(props) {
  return (
    <fieldset className="search">
      <legend id="search-legend">Search</legend>
      <form id="search-form">
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
        
        <label htmlFor="dateFrom">Date:</label>
        <input type="date" name="dateFrom" required />
        <label htmlFor="dateTo">Date:</label>
        <input type="date" name="dateTo" required />
      <button id="search-button" type="submit">Search</button>
    </form>
  </fieldset>
  );
};

SearchForm.defaultProps = {
  name: '',
  image: '',
  link: '',
};
