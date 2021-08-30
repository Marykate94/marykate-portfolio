import logo from './logo.svg';
import React, { useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';


function App() {

  // const currentPage = "Contact";

  const [currentPage, setCurrentPage] = useState("About")

  function renderPage() {
    if(currentPage == "About") {
      return <About />;
    } else if(currentPage == "Project") {
      return <Project />;
    } else  if(currentPage == "Contact") {
      return <Contact />;
    }
  }

  return (
    <main>
      <Nav setCurrentPage={setCurrentPage} />


      {renderPage()}
    </main>
  );
}

export default App;

