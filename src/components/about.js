import React from 'react';
import '../index.css';

export default function About(props) {
  return (
    <div className="container">
      <section className="caption">
        <header>
          <h2>{props.title}</h2>
        </header>
        <p>{props.description}</p>
      </section>
    </div>
  );
}

About.defaultProps = {
  title: '',
  description: ''
}