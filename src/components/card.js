import React from 'react';
import './card.css';

export default function Card(props) {
    return (
      <section class="card">
        <img src={props.image} alt="Property"/>
        <div class="container">
          <h4><b>{props.name}</b></h4> 
        </div>
      </section>
    );
};

Card.defaultProps = {
    name: '',
    image: '',
};
