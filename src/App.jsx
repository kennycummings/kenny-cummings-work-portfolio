import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './components/Home.jsx';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import Terralus from './components/Terralus.jsx';
import Archwake from './components/Archwake.jsx';
import Contact from './components/Contact.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Header />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/terralus" element={<Terralus />} />
            <Route path="/archwake" element={<Archwake />} />
            <Route path="/indevelopment" element={<Navigate to="/terralus" replace />} />
            <Route path="/daily-fitness-quest" element={<Navigate to="/archwake" replace />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
