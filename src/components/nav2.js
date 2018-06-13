import React from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';
// import {clearAuth} from '../actions/auth';
// import {clearAuthToken} from '../local-storage';
import './nav.css';
import {getLoggedIn, setLoggedIn} from '../local-storage';

export class Nav2 extends React.Component {  
    // logOut() {
    //     this.props.dispatch(clearAuth());
    //     clearAuthToken();
    // }

    logOut() {
        setLoggedIn(false);
    }
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
                        {/* <Link to="/register"><li>Create Account</li></Link> */}
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
                    {/* <Link to="/register"><button className="nav-large-menu-items">Create Account</button></Link> */}
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: getLoggedIn(),
});

export default connect(mapStateToProps)(Nav2);