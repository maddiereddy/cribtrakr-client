import React from 'react';
import {Link} from 'react-router-dom';
import './property-card.css';

export default function PropertyCard(props) {
  return (
    <section className="property-card">
       <Link to={`${props.link}/${props.id}`}><img src={props.image} alt="Property"/></Link>
      <div className="container">
        <Link to={`${props.link}/${props.id}`}><h4><b>{props.name}</b></h4></Link> 
      </div>
    </section>
  );
};

PropertyCard.defaultProps = {
  name: '',
  image: '',
  link: '',
  id: ''
};
