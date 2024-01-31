import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navigation />

        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
