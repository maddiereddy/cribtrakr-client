import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

  render() {
    return (
      <div className="dashboard">
        <header role="banner">
          <h1>Rental Properties</h1>
        </header>
        <section class="card">
          <img src={require("./home.png")} alt="Property"/>
          <div class="container">
            <h4><b>Property 1</b></h4> 
            <p>Address 1</p> 
          </div>
        </section>
        <section class="card">
          <img src={require("./home.png")} alt="Property"/>
          <div class="container">
            <h4><b>Property 2</b></h4> 
            <p>Address 2</p> 
          </div>
        </section>
        <section class="card">
          <img src={require("./add-home.png")} alt="Add Property"/>
          <div class="container">
            <h4><b>Add Property</b></h4> 
            <p></p> 
          </div>
        </section>
        {/* <div className="dashboard-username">
          Username: {this.props.username}
        </div>
        <div className="dashboard-name">Name: {this.props.name}</div>
        <div className="dashboard-protected-data">
          Protected data: {this.props.protectedData}
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
