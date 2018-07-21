import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import './dashboard.css';
import Header from './header';
import AddForm from './add-form';

export class AddRental extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    let username;
    if(this.props.username) {
      username = this.props.username;
    }
    return (
      <div className="dashboard">
        <Header title='Add New Property' />
        <section>
          <AddForm username={username} />
        </section>
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

export default requiresLogin()(connect(mapStateToProps)(AddRental));