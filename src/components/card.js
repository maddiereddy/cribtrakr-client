import React from 'react';
import {Link} from 'react-router-dom';
import './card.css';

export default function Card(props) {
    return (
      <section class="card">
        <img src={props.image} alt="Property"/>
        <div class="container">
          <Link to={props.link}><h4><b>{props.name}</b></h4></Link> 
        </div>
      </section>
    );
};

Card.defaultProps = {
    name: '',
    image: '',
    link: '',
};
