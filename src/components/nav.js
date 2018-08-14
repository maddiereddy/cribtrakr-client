import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './nav.css';

export class Nav extends React.Component {  
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    render() {
        //mobile devices display a hamburger menu
        //large screens display a top nav-bar menu
        let logOutButton;
        let logOutButtonLarge;
        if (this.props.loggedIn) {
            logOutButton = (
                <a onClick={() => this.logOut()}><li>Log out</li></a>
            );
            logOutButtonLarge = (
                <a onClick={() => this.logOut()}><button className="nav-large-menu-items">Log out</button></a>
            );
        }
        const loggedIn = this.props.loggedIn;
        return (
            <nav className="nav">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    {loggedIn ? (
                    
                    <ul id="menu">
                        <a href="/dashboard"><li>Rentals</li></a> 
                        <a href="/expenses"><li>Expenses</li></a>
                        {logOutButton}
                    </ul>
                    ) : (
                    <ul id="menu">
                         <a href="/#logIn"><li>Log In</li></a>
                        <Link to="/register"><li>Create Account</li></Link>
                        <a href="/#home-section"><li>Home</li></a>
                    </ul>
                    )}
                </div>
                {loggedIn ? (
                <div id="nav-large-menu">
                    <Link to="/dashboard"><button id="home-link" className="nav-large-menu-items">
                    <img className="logo-sm" src={require("../images/house.png")} alt="CribTrakr" /> <span className="logo-title">CribTrakr</span></button></Link>
                    <Link to="/dashboard"><button className="nav-large-menu-items">Rentals</button></Link>
                    <Link to="/expenses"><button className="nav-large-menu-items">Expenses</button></Link>
                    {logOutButtonLarge}
                </div> ) : (
                <div id="nav-large-menu">
                    <a href="/#home-section"><button id="home-link" className="nav-large-menu-items">
                    <img className="logo-sm" src={require("../images/house.png")} alt="CribTrakr" /> <span className="logo-title">CribTrakr</span></button></a>
                    <a href="/#logIn"><button className="nav-large-menu-items">Log In</button></a>
                    <Link to="/register"><button className="nav-large-menu-items">Create Account</button></Link>
                </div>
                )}
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Nav);