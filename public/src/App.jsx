import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
//import './assets/css/noscript.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="is-preload">
        <div id="wrapper">
          <Header />
          <Nav />
          <div id="main">
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/content" element={<Section id="first" title="Content" />} />
              <Route path="/taxonomy" element={<Section id="second" title="Taxonomy" />} />
              <Route path="/team" element={<Section id="cta" title="Team" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
