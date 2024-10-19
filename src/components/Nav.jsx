import React from 'react';
//import { Link } from 'react-router-dom';
import '../Styles/Intro.css';


function Nav() {
  const scrollToSection = (id) => {
    console.log("Triggers");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li><a onClick={() => scrollToSection('intro')} className="active">Home</a></li>
        <li><a onClick={() => scrollToSection('first')} >Content</a></li>
        <li><a onClick={() => scrollToSection('second')}>Taxonomy</a></li>
        <li><a onClick={() => scrollToSection('cta')} >Team</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
