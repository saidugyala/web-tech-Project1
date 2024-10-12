import React from 'react';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Section from './components/Section';
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
        <nav>
          <ul>
            <li><a href="#" onClick={() => scrollToSection('intro')}>Intro</a></li>
            <li><a href="#" onClick={() => scrollToSection('first')}>Content</a></li>
            <li><a href="#" onClick={() => scrollToSection('second')}>Taxonomy</a></li>
            <li><a href="#" onClick={() => scrollToSection('cta')}>Team</a></li>
          </ul>
        </nav>
        <div id="main">
          <section id="intro">
            <Intro />
          </section>
          <section id="first">
            <Section id="first" title="Content" />
          </section>
          <section id="second">
            <Section id="second" title="Taxonomy" />
          </section>
          <section id="cta">
            <Section id="cta" title="Team" />
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
