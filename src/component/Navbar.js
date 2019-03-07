import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css'

export default () => (
  <nav className="navList">
    <ul className="formLink">
      <li>
        <Link to="/">Form</Link>
      </li>
      <li>
        <Link to="/info">Submitted Info</Link>
      </li>
    </ul>
  </nav>
);


