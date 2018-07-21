import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import About from './about';
import LoginForm from './login-form';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
      return <Redirect to="/dashboard" />;
  }

  const captions = [
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
      description: 'First, create an account and add details of all your rental properties. Next, add expenses for each property as they come in. You can even upload pics of your bill receipts to have them handy during tax time!'
    }
  ];

  return (
      <div className="home">
          <h1>Welcome to CribTrakr</h1>
          <About key={0} {...captions[0]} />
          <About key={1} {...captions[1]} />
          <About key={2} {...captions[2]} />
          <LoginForm />
          <Link to="/register">Register</Link>
          <div className="demo-credentials">
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>Demo Credentials</u></b> <br/>
            <b><i>Username:</i></b>  demo <br/>
            <b><i>Password:</i></b>  password
          </div>
        </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);


// export class LandingPage extends React.Component {
//   componentDidMount() {
//     // If we are logged in redirect straight to the user's dashboard
//     if (this.props.loggedIn) {
//         return <Redirect to="/dashboard" />;
//     }

//     // this.state = {
//     //   captions: [
//     //     {
//     //       title: 'What is CribTrakr?',
//     //       description: 'CribTrakr is an app that keeps track of all expenses made for each of your rental properties'
//     //     },
//     //     {
//     //       title: 'Who is using CribTrakr?',
//     //       description: 'It is a wildly popular app that is being used by property owners and management companies to keep track of various rental properties remotely'
//     //     },
//     //     {
//     //       title: 'How does CribTrakr work?',
//     //       description: 'First, create an account and add details of all your rental properies. Next, add expenses for each property as they come in. You can even upload pics of your bill receipts to have them handy during tax time!'
//     //     }
//     //   ]
//     // };
//   }

//    render() {
//   //   const captions = this.state.captions.map((caption, index) => (
//   //     <About key={index} {...caption} />
//   //   ));
//     return (
//         <div id="top" className="home">
//             <h1>Welcome to CribTrakr</h1>
//             {/* {captions} */}
//             <br />
//             <LoginForm />
//             <Link to="/register">Register</Link>
//         </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   loggedIn: state.auth.currentUser !== null
// });

// export default connect(mapStateToProps)(LandingPage);
