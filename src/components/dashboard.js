import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import './dashboard.css';
import Card from './card';
import Header from './header';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

  render() {
    return (
      <div className="dashboard">
        <Header title='Rental Properties' />
        <Card name='Property 1' image={require("./home.png")} />
        <Card name='Property 2' image={require("./home.png")} />
        <Card name='Property 3' image={require("./home.png")} />
        <Card name='Add Property 1' image={require("./add-home.png")} />
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
