import React from 'react';
import './nav.css';

export class Nav2 extends React.Component {  
  render() {
    return (
      <nav className="nav">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          
          <ul id="menu">
            <a href="#top"><li>Home</li></a>
            <a href="#logIn"><li>Log In</li></a>
          </ul>
        </div>
        <div id="nav-large-menu">
          <a href="#top">
            <button id="home-link" className="nav-large-menu-items">
              <img className="logo-sm" src={require("../images/house.png")} alt="CribTrakr" /> 
              <span className="logo-title">CribTrakr</span>
            </button>
          </a>
          <a href="#logIn"><button className="nav-large-menu-items">Log In</button></a>
        </div>
      </nav>
    );
  }
}

export default Nav2;