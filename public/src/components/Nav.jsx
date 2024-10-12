import React from 'react';
//import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav id="nav">
      <ul>
        <li><a href="#intro" className="active">Home</a></li>
        <li><a href="#first">Content</a></li>
        <li><a href="#second">Taxonomy</a></li>
        <li><a href="#cta">Team</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
