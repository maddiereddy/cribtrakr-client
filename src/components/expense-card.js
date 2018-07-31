import React from 'react';
import { Link } from 'react-router-dom';
import './expense-card.css';
import Moment from 'react-moment';
import 'moment-timezone';

export default function ExpenseCard(props) {  

  return (
    <section className="expense-card">
      <div className="container">
      <p className="icons">
          <Link to={`${props.link}/${props.propId}/${props.id}`}> <i className="fa fa-pencil" aria-hidden="true"></i></Link>
          <Link to={`delete-expense/${props.id}`}><i className="fa fa-times" aria-hidden="true"></i></Link>
        </p>
        <p className="date"><b><em>Date of Service: </em></b><Moment tz="America/Los_Angeles" aria-hidden="true" format="MMM DD, YYYY">{props.date}</Moment></p>
        <p className="expense"><b><em>Expense: </em></b>{props.amount}</p>
        <p className="vendor"><b><em>Vendor: </em></b>{props.vendor}</p>
        <p className="description"><b><em>Description: </em></b>{props.description}</p>
        <p className="property"><b><em>Property: </em></b>{props.propName}</p>
        <p className="category"><b><em>Category: </em></b>{props.category}</p>
      </div>
    </section>
  );
};

ExpenseCard.defaultProps = {
  date: '',
  vendor: '',
  description: '',
  propName: '',
  category: '',
  link: '',
  expense: [],
  propId: '',
  id:''
};
