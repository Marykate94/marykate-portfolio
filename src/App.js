import logo from './logo.svg';
import React, { useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer';
import Resume from './components/Resume';
import "bootstrap/dist/css/bootstrap.min.css";



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
    } else  if(currentPage == "Resume") {
      return <Resume />;
    }
  }

  return (
    <main>
      <Nav setCurrentPage={setCurrentPage} />


      {renderPage()}
      <Footer></Footer>
    </main>

  );
}

export default App;

