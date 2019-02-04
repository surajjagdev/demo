import React from 'react';
import './App.css';
const Display = props => {
  return <div className="appDisplay">{props.children}</div>;
};
export default Display;
