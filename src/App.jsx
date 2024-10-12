import React from 'react';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Intro from './components/Intro';
//import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="is-preload">
      <div id="wrapper">
        <Header />
        <Nav />
        <Intro />
        <Footer />
      </div>
    </div>
  );
}

export default App;
