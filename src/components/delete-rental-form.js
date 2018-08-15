import React from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { deleteRental, fetchRental  } from '../actions/rentals';
import './dashboard.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export class DeleteRentalForm extends React.Component {
  onSubmit(values) {
    const rentalId = this.props.initialValues.id
    const username = this.props.username;
    const rental = Object.assign({}, { user: username }, { id: rentalId }, values);
    return this.props.dispatch(deleteRental(rental))
  }
  render() {
    //redux form used to update rental content
    if (this.props.submitSucceeded === true ) {
      return (
        <div>
          <Redirect to={`/dashboard`} />
        </div>
      )
    }  

    return (
        <div>
          <form className="delete-rental-form" id="delete-property-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
          
          <section className="property-details">
            <h4 className="delete-rental"><b>
              <span>{this.props.initialValues.street}</span>,&nbsp;
              <span>{this.props.initialValues.city}</span>,&nbsp;
              <span> {this.props.initialValues.state}</span>&nbsp;
              <span> {this.props.initialValues.zip}</span> <br/>
            </b></h4>
          </section>
          <div>
            <button type="submit" >Yes, delete property</button>
            <Link to="/dashboard"><button type="button">No, go back</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

DeleteRentalForm = reduxForm({
    form: "deleteRental",
    // onSubmitFail: (errors, dispatch) =>
    //     dispatch(focus('editRental', Object.keys(errors)[0]))
})(DeleteRentalForm);

DeleteRentalForm = connect(
  state => ({ initialValues: state.rental.currentRental }), // pull initial values from account reducer
  { load: fetchRental } // bind account loading action creator
)(DeleteRentalForm);

export default DeleteRentalForm;