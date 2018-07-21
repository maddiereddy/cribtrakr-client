import React from 'react';
import {Link} from 'react-router-dom';
import './rental-card.css';

export default function RentalCard(props) {
  return (
    <section className="property-card">
       <Link to={`${props.link}/${props.id}`}><img src={props.image} alt="Property"/></Link>
      <div className="container">
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
