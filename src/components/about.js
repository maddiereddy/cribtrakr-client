import React from 'react';
import '../index.css';

class About extends React.Component {

  render() {
    return (
      <div className="container">
        <section>
          <header>
              <h3>What is CribTrakr?</h3>
          </header>
          <p>Some info about benefits of CribTrakr.</p>
        </section>
        <section>
          <header>
              <h3>Who is using CribTrakr?</h3>
          </header>
          <p>Some info about benefits of CribTrakr.</p>
        </section>
        <section>
          <header>
              <h3>How does CribTrakr work?</h3>
          </header>
          <p>Some info about benefits of CribTrakr.</p>
        </section>
      </div>
    );
  }
}

export default About;