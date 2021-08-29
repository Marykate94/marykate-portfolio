import logo from './logo.svg';
import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
            <About></About>
            <Contact></Contact>
            <Project></Project>
      </main>
    </div>
  );
}

export default App;
