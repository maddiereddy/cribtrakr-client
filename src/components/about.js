import React from 'react';
import '../index.css';

export default function About(props) {
  return (
    <div className="container">
      <section className="caption">
        <header>
          <h2 aria-label="{props.title}">{props.title}</h2>
        </header>
        <p aria-label="description" aria-live="polite" >{props.description}</p>
      </section>
    </div>
  );
}

About.defaultProps = {
  title: '',
  description: ''
}