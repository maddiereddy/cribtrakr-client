import React from 'react';
import '../index.css';

export default function About(props) {
  return (
    <div className="container">
      <section className="caption">
        <header>
            <h3>{props.title}</h3>
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