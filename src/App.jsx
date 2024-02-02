import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />

        <Routes>
          <Route index set element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
