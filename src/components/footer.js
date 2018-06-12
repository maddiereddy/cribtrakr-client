import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';


export default class Footer extends React.Component {
  //author's contact information
  render() {
    return (
      <footer className="footer">
        <span role="region" className="footer-copyright">
          <i className="fa fa-copyright" aria-hidden="true"></i> CribTrakr 2018 by Maddie Rajavasireddy
        </span>
        <span role="region" className="footer-contact">
          <Link to="https://github.com/maddiereddy/cribtrakr-client"><i className="fa fa-github" aria-hidden="true"></i></Link>
          <Link to="mailto:maddiereddy@gmail.com?Subject=Hello"><i className="fa fa-envelope" aria-hidden="true"></i></Link>
        </span>
      </footer>
    ); 
    
  }
}
