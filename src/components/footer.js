import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';


export default class Footer extends React.Component {
  //author's contact information
  render() {
    return (
      <footer className="footer" role="region">
        <span role="region" className="footer-copyright">
          <i className="fa fa-copyright" aria-hidden="true"></i> CribTrakr 2018 by Maddie Rajavasireddy
        </span>
        <span role="region" className="footer-contact">
          <Link to="https://github.com/maddiereddy/cribtrakr-client" role="none"><i className="fa fa-github"  aria-label="github link"></i></Link>
          <Link to="https://www.linkedin.com/in/maddierajavasireddy/" role="none"><i className="fa fa-linkedin" aria-label="linkedIn link"></i></Link>
          <Link to="mailto:maddiereddy@gmail.com?Subject=Hello" role="none"><i className="fa fa-envelope" aria-label="gmail link"></i></Link>
          
        </span>
      </footer>
    );     
  }
}
