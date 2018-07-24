import React from 'react';
import {Link} from 'react-router-dom';
import './rental-card.css';

export default function RentalCard(props) {
  return (
    <section className="property-card">
      <div className="container">
        <p className="icons">
          <Link to={props.link}> <i className="fa fa-pencil" aria-hidden="true"></i></Link>
          <Link to={`delete-rental/${props.id}`}><i className="fa fa-times" aria-hidden="true"></i></Link>
        </p>
        <Link to={`${props.link}/${props.id}`}><img src={props.image} alt="Property"/></Link>
        <Link to={`${props.link}/${props.id}`}><h4><b>{props.name}</b></h4></Link> 
      </div>
    </section>
  );
};

RentalCard.defaultProps = {
  name: '',
  image: '',
  link: '',
  id: ''
};
