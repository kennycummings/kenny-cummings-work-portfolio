import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
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

        <Switch>
          <Route path="/about" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          {/* Add more routes as needed */}
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
