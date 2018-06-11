import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import './dashboard.css';
import PropertyCard from './property-card';
import Header from './header';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

  render() {
    return (
      <div className="dashboard">
        <Header title='Rental Properties' />
        <PropertyCard link='/property-details' name='Property 1' image={require("./home.png")} />
        <PropertyCard link='/property-details' name='Property 2' image={require("./home.png")} />
        <PropertyCard link='/property-details' name='Property 3' image={require("./home.png")} />
        <PropertyCard link='/add-property' name='Add Property' image={require("./add-home.png")} />
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
