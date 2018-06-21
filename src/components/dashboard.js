import React from 'react';
// import {connect} from 'react-redux';
// import requiresLogin from './requires-login';
// import {fetchProtectedData} from '../actions/protected-data';
import './dashboard.css';
import PropertyCard from './property-card';
import Header from './header';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: [
        {
          link: '/property-details',
          name: 'Property 1',
          image: require('../images/home.png')
        },
        {
          link: '/property-details',
          name: 'Property 2',
          image: require('../images/home.png')
        },
        {
          link: '/property-details',
          name: 'Property 3',
          image: require('../images/home.png')
        },
        {
          link: '/add-property',
          name: 'Add New Property',
          image: require('../images/add-home.png')
        }
      ]
    };
  }
    // componentDidMount() {
    //     this.props.dispatch(fetchProtectedData());
    // }

  render() {
    const properties = this.state.properties.map((property, index) => (
      <PropertyCard key={index} {...property} />
    ));
    return (
      <div className="dashboard">
        <Header title='Rental Properties' />
        {properties}
        {/* <PropertyCard link='/property-details' name='Property 1' image={require("../images/home.png")} />
        <PropertyCard link='/property-details' name='Property 2' image={require("../images/home.png")} />
        <PropertyCard link='/property-details' name='Property 3' image={require("../images/home.png")} />
        <PropertyCard link='/add-property' name='Add Property' image={require("../images/add-home.png")} /> */}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//     // const {currentUser} = state.auth;
//     // return {
//     //     username: state.auth.currentUser.username,
//     //     name: `${currentUser.firstName} ${currentUser.lastName}`,
//     //     protectedData: state.protectedData.data
//     // };
// };

// export default requiresLogin()(connect(mapStateToProps)(Dashboard));
