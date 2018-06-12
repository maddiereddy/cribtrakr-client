import React from 'react';
import './expense-card.css';

export default function ExpenseCard(props) {
    return (
      <section className="card">
          <p>[<em>placeholder for details of an expense</em>]
            <span class="icons">
              <a href='/expense-details'> <i class="fa fa-pencil" aria-hidden="true"></i></a>
              <i class="fa fa-times" aria-hidden="true"></i>
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
