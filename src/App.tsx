import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import InformationTab from './components/InformationTab';
import Contact from './components/Contact'; // Import the Contact component
import './index.css'; // Ensure this import is present

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className='app-container'>
            <Hero />
            <InformationTab />
          </div>
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;