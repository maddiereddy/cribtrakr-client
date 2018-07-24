import React from 'react';
import {Link} from 'react-router-dom';
import './rental-card.css';

export default class RentalCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  onClick(e){
    e.preventDefault();
    this.setState({open: !this.state.open})
  }

  render() {
    const expenses = (
      <fieldset className="form-section">
        <legend>Expenses</legend>
        <span>Mortgage: {this.props.rental.mortgage}</span> <br/>
        <span>PMI: {this.props.rental.pmi}</span><br/>
        <span>Insurance: {this.props.rental.insurance}</span><br/> 
        <span>Property Tax: {this.props.rental.propertyTax}</span> <br/>
        <span>HOA Fees: {this.props.rental.hoa}</span> <br/>
        <span>Management Fees: {this.props.rental.managementFees}</span><br/>
        <span>Miscellaneous: {this.props.rental.misc}</span><br/> 
      </fieldset>
    );

    return (
      <section className="property-card">
        <div className="container">
          <p className="icons">
            <Link to={`${this.props.link}/${this.props.id}`}> <i className="fa fa-pencil" aria-hidden="true"></i></Link>
            <Link to={`delete-rental/${this.props.id}`}><i className="fa fa-times" aria-hidden="true"></i></Link>
          </p>
          <img src={this.props.image} alt="Property"/>
          <div>
            <h4><b>
              <span>{this.props.rental.street}</span> <br/>
              <span>{this.props.rental.city}</span>,  
              <span>{this.props.rental.state}</span> -  
              <span>{this.props.rental.zip}</span> <br/>
            </b></h4>
            <button onClick={this.onClick.bind(this)}>Show Expenses</button>
            { this.state.open && expenses }
          </div>
        </div>
      </section>
    );
  };
};

RentalCard.defaultProps = {
  rental: {},
  image: '',
  link: '',
  id: '',
};
