import React from 'react';

export default function SearchForm(props) {
    return (
      <div className="search-form">
        <form id="search">
          <p>[<em>Search Filters</em> (by date range, property, category)]
          </p>
          <button type="submit">Search</button>
        </form>
      </div>
    );
};

SearchForm.defaultProps = {
    name: '',
    image: '',
    link: '',
};
