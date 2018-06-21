import React from 'react';
// import {connect} from 'react-redux';
// import {Link, Redirect} from 'react-router-dom';
// import {Redirect} from 'react-router-dom';
import About from './about';
import LoginForm from './login-form';
// import { setLoggedIn } from '../local-storage';
import {Nav2} from './nav2';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      captions: [
        {
          title: 'What is CribTrakr?',
          description: 'CribTrakr is an app that keeps track of all expenses made for each of your rental properties'
        },
        {
          title: 'Who is using CribTrakr?',
          description: 'It is a wildly popular app that is being used by property owners and management companies to keep track of various rental properties remotely'
        },
        {
          title: 'How does CribTrakr work?',
          description: 'First, create an account and add details of all your rental properies. Next, add expenses for each property as they come in. You can even upload pics of your bill receipts to have them handy during tax time!'
        }
      ]
    };
  }
    // If we are logged in redirect straight to the user's dashboard
    //if (props.loggedIn) {
    //     return <Redirect to="/dashboard" />;
    // }
    //setLoggedIn(false);
  render() {
    const captions = this.state.captions.map((caption, index) => (
      <About key={index} {...caption} />
    ));
    return (
        <div id="top" className="home">
            <Nav2 />
            <h1>Welcome to CribTrakr</h1>
            {captions}
            <br />
            <LoginForm />
            {/* <Link to="/register">Register</Link> */}
        </div>
    );
  }
}

// const mapStateToProps = state => ({
//     // loggedIn: state.auth.currentUser !== null
// });

// export default connect(mapStateToProps)(LandingPage);
