import React from 'react';
import './App.css';

import Header from './components/Header';
import Intro from './components/Intro';
//import Section from './components/Section';
//import Footer from './components/Footer';

function App() {
  

  return (
    <div className="is-preload">
      <div id="wrapper">
        
        <Header/>
        <Intro />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
