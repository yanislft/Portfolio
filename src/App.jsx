import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
    </>
  );
}

export default App;