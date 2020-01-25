import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h3>Hello, {props.name}</h3>
}

const element = <Welcome name="Katie" />;

ReactDOM.render(element, document.getElementById('app'));