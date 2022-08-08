import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div>
      <Header/>
      <div>
        <Routes>
          <Route 
            path="/"
            element={<Home/>}
          />
          <Route 
            path="/about"
            element={<About/>}
          />
          <Route 
            path="/contact"
            element={<Contact/>}
          />
          <Route 
            path="/projects"
            element={<Projects/>}
          />
        </Routes>
      </div>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
