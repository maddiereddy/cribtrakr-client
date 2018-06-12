import React from 'react';
import './expense-card.css';

export default function ExpenseCard(props) {
    return (
      <section className="card">
          <p>[<em>placeholder for details of an expense</em>]
            <span className="icons">
              <a href='/expense-details'> <i className="fa fa-pencil" aria-hidden="true"></i></a>
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
