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
        const loggedIn = true;//this.props.loggedIn;
        return (
            <nav className="nav">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    {loggedIn ? (
                    
                    <ul id="menu">
                        <a href="/"><li>Home</li></a> 
                        {logOutButton}
                    </ul>
                    ) : (
                    <ul id="menu">
                        <Link to="/#logIn"><li>Log In</li></Link>
                        <Link to="/register"><li>Create Account</li></Link>
                        <Link to="/"><li>Home</li></Link>
                    </ul>
                    )}
                </div>
                {loggedIn ? (
                <div id="nav-large-menu">
                    <Link to="/dashboard"><button id="home-link" className="nav-large-menu-items">
                    <img className="logo-sm" src={require("../images/house.png")} alt="CribTrakr" /> <span className="logo-title">CribTrakr</span></button></Link>
                    <Link to="/expenses"><button className="nav-large-menu-items">Expenses</button></Link>
                    {logOutButtonLarge}
                </div> ) : (
                <div id="nav-large-menu">
                    <Link to="/dashboard"><button id="home-link" className="nav-large-menu-items">
                    <img className="logo-sm" src={require("../images/house.png")} alt="CribTrakr" /> <span className="logo-title">CribTrakr</span></button></Link>
                    {/* <Link to="/#logIn"><button className="nav-large-menu-items">Log In</button></Link>
                    <Link to="/register"><button className="nav-large-menu-items">Create Account</button></Link> */}
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