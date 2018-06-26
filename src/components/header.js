import React from 'react';

export default function Header(props) {
  return (
    <header role="banner">
      <h1>{props.title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: '',
};
