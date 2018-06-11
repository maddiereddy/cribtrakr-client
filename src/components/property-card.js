import React from 'react';
import {Link} from 'react-router-dom';
import './property-card.css';

export default function PropertyCard(props) {
    return (
      <section class="card">
        <img src={props.image} alt="Property"/>
        <div class="container">
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
