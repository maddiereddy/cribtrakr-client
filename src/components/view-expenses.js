import React from 'react';

export default function ViewExpenses(props) {
    return (
      <section>
        <section>
          <form id="search">
          <p>[<em>Search Filters</em> (by date range, property, category)]
          </p>
          <button type="submit">Search</button>
        </form>
        </section>
        <section>
          <p>[<em>placeholder for details of an expense</em>]
            <span class="icons">
              <i class="fa fa-pencil" aria-hidden="true"></i>
              <i class="fa fa-times" aria-hidden="true"></i>
            </span>
          </p>
        </section>
        <section>
          <p>[<em>placeholder for details of an expense</em>]
            <span class="icons">
              <i class="fa fa-pencil" aria-hidden="true"></i>
              <i class="fa fa-times" aria-hidden="true"></i>
            </span>
          </p>
        </section>
        <section>
          <p>[<em>placeholder for details of an expense</em>]
            <span class="icons">
              <i class="fa fa-pencil" aria-hidden="true"></i>
              <i class="fa fa-times" aria-hidden="true"></i>
            </span>
          </p>
        </section>
      </section>
    );
};

ViewExpenses.defaultProps = {
    name: '',
    image: '',
};