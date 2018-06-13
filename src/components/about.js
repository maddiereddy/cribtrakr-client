import React from 'react';
import '../index.css';

class About extends React.Component {

  render() {
    return (
      <div className="container">
        <section>
          <header>
              <h3>Section 1</h3>
          </header>
          <p>[<em>placeholder for screenshot of some real estate</em>]</p>
          <p>Some info about benefits of CribTrakr.</p>
        </section>
        <section>
          <header>
              <h3>Section 2</h3>
          </header>
          <p>[<em>placeholder for screenshot of some real estate</em>]</p>
          <p>Some info about benefits of CribTrakr.</p>
        </section>
        <section>
          <header>
              <h3>Section 3</h3>
          </header>
          <p>[<em>placeholder for screenshot of some real estate</em>]</p>
          <p>Some info about benefits of CribTrakr.</p>
        </section>
      </div>
    );
  }
}

export default About;