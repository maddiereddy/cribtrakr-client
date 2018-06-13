import React from 'react';
import Nav from './nav';

export default function Header(props) {
    return (

      <div>
      <Nav />
      <header role="banner">
        <h1>{props.title}</h1>
      </header>
      </div>
    );
};

Header.defaultProps = {
    title: '',
};
