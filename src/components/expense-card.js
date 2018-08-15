import React from 'react';
import { Link } from 'react-router-dom';
import './expense-card.css';
import Moment from 'react-moment';
import 'moment-timezone';

export default function ExpenseCard(props) {  

  return (
    <section className="expense-card">
      <div className="container">
        <div>
          <span className="card-title">{props.propName}</span>
          <span className="icons">
            <Link to={`${props.link}/${props.id}`}> <i className="fa fa-pencil" aria-hidden="true"></i></Link>
            <Link to={`delete-expense/${props.id}`}><i className="fa fa-times" aria-hidden="true"></i></Link>
          </span>
        </div>
        <p className="date"><span className="expense-field-title">Date of Service: </span><Moment tz="America/Los_Angeles" aria-hidden="true" format="MMM DD, YYYY">{props.date}</Moment></p>
        <p className="expense"><span className="expense-field-title">Expense: </span>{props.amount}</p>
        <p className="vendor"><span className="expense-field-title">Vendor: </span>{props.vendor}</p>
        <p className="description"><span className="expense-field-title">Description: </span>{props.description}</p>
        <p className="category"><span className="expense-field-title">Category: </span>{props.category}</p>
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
