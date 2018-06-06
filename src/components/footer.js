import React from 'react';
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
  //author's contact information
  render() {
    return (
      <footer className="footer">
        <span role="region" class="footer-copyright">
          <i class="fa fa-copyright" aria-hidden="true"></i> CribTrakr 2018 by Maddie Rajavasireddy
        </span>
        <span role="region" class="footer-contact">
          <Link to="https://github.com/maddiereddy/cribtrakr-client"><i class="fa fa-github" aria-hidden="true"></i></Link>
          <Link to="mailto:maddiereddy@gmail.com?Subject=Hello"><i class="fa fa-envelope" aria-hidden="true"></i></Link>
        </span>
      </footer>
    ); 
    
  }
}
