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
      {/* <section>
        <header>
            <h3>What is CribTrakr?</h3>
        </header>
        <p>CribTrakr is an app that keeps track of all expenses made for each of your rental properties</p>
      </section>
      <section>
        <header>
            <h3>Who is using CribTrakr?</h3>
        </header>
        <p>It is a wildly popular app being used by property owners and management companies to keep track of various rental properties remotely</p>
      </section>
      <section>
        <header>
            <h3>How does CribTrakr work?</h3>
        </header>
        <p>Create an account and add details of all your rental properies. Next, add expenses for each property as they come in. You can even upload pics of your bill receipts to have them handy during tax time!</p>
      </section> */}
    </div>
  );
}

About.defaultProps = {
  title: '',
  description: ''
}