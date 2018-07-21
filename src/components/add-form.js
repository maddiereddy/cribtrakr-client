import React from 'react'
import { Field, focus, reduxForm } from 'redux-form'
import { newRental  } from '../actions/rentals'
import './dashboard.css';
import Input from './input';

export class CreateRentalForm extends React.Component {
    //form used to post a rental property
    onSubmit(values) {
        // const username = this.props.username;
        // const topicId = this.props.topicId;
        // const blog = Object.assign({}, {username, topicId}, values);
        // //the blog object is passed to the newBlog action to post the blog data
        // return this.props
        // .dispatch(newBlog(blog))
    }

    render() {
        return (
            <div>
             <form
                className="rental-form"
                onSubmit={this.props.handleSubmit((values) =>
                    this.onSubmit(values)
                )}>
                <div>
                  <label htmlFor="title">Title</label>
                </div>
                <div>
                  <Field
                    component={Input}
                    type="text"
                    name="title"
                    required />
                </div>
                
                <div>
                  <button type="submit" 
                   disabled={this.props.pristine || this.props.submitting}>
                    Add Rental Property
                  </button>    
                </div>
            </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'rental',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('rental', Object.keys(errors)[0]))
})(CreateRentalgForm);