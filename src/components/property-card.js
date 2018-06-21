import React from 'react';
import {Link} from 'react-router-dom';
import './property-card.css';

export default function PropertyCard(props) {
  return (
    <section className="property-card">
      <img src={props.image} alt="Property"/>
      <div className="container">
        <Link to={props.link}><h4><b>{props.name}</b></h4></Link> 
      </div>
    </section>
  );
};

PropertyCard.defaultProps = {
  name: '',
  image: '',
  link: '',
};
