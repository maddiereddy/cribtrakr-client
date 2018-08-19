import React from 'react';
import {Link} from 'react-router-dom';
import './rental-card.css';

export default class RentalCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      open: false,
      newRental: this.props.newRental
    };
  }

  onClick(e){
    e.preventDefault();
    this.setState({open: !this.state.open})
  }

  render() {
    const expenses = (
      <fieldset className="form-section">
        <legend>Recurring Payments</legend>
        <p><span className="rental-field-title">Mortgage (per month): </span>{this.props.rental.mortgage}</p>
        <p><span className="rental-field-title">PMI (per month): </span>{this.props.rental.pmi}</p>
        <p><span className="rental-field-title">Insurance (per year): </span>{this.props.rental.insurance}</p>
        <p><span className="rental-field-title">Property Tax (per year): </span>{this.props.rental.propertyTax}</p>
        <p><span className="rental-field-title">HOA Fees (per month): </span>{this.props.rental.hoa}</p>
        <p><span className="rental-field-title">Management Fees (per month): </span>{this.props.rental.managementFees}</p>
        <p><span className="rental-field-title">Miscellaneous: </span>{this.props.rental.misc}</p>
      </fieldset>
    );

    const existProperty = (
      <div>
        <p className="icons">
          <Link to={`${this.props.link}/${this.props.id}`} aria-label="link to edit property"> <i className="fa fa-pencil" aria-hidden="true"></i></Link>
          <Link to={`delete-rental/${this.props.id}`} aria-label="link to delete property"><i className="fa fa-times" aria-hidden="true"></i></Link>
        </p>
        <br />
        <br />
        <p className="rental-image">
        { this.props.rental.imageURL ?
          <img className="old" src={this.props.rental.imageURL} alt="Property"/>
          :
          <img className="new" src={this.props.image} alt="Property"/>
        }
        </p>
        <div className="rental-address">
          <span>{this.props.rental.street}</span> <br/>
          <span>{this.props.rental.city}</span>,  
          <span> {this.props.rental.state}</span> 
          <span> {this.props.rental.zip}</span> <br/>
        </div>
        <button className="rental-card-button" onClick={this.onClick.bind(this)}>{ this.state.open ? 'Hide' : 'Show' } Details</button>
        { this.state.open && expenses }
      </div>
    );

    const newProperty = (
      <div>
        <Link to={`${this.props.link}/${this.props.id}`}><img src={this.props.image} alt="Property"/></Link>
        <div className="rental-address">
          <span><Link to={`${this.props.link}/${this.props.id}`}>{this.props.name}</Link></span>
        </div>
      </div>
    );

    return (
      <section className="property-card">
        <div className="container">
          { this.state.newRental ? newProperty : existProperty}
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
  name: '',
  newRental: false
};
