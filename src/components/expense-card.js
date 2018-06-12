import React from 'react';
import { Link } from 'react-router-dom';
import './expense-card.css';

export default function ExpenseCard(props) {
    return (
      <section className="card">
          <p>[<em>placeholder for details of an expense</em>]
            <span className="icons">
              <Link to='/expense-details'> <i className="fa fa-pencil" aria-hidden="true"></i></Link>
              <i className="fa fa-times" aria-hidden="true"></i>
            </span>
          </p>
        </section>
    );
};

ExpenseCard.defaultProps = {
    name: '',
    image: '',
    link: '',
};
