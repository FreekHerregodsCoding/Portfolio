import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import InformationTab from './components/InformationTab';
import Contact from './components/Contact';
import './index.css'; // Ensure this import is present

const LoadingAnimation: React.FC = () => {
  return (
    <div className="loading-container">
      <motion.span
        animate={{ y: ["0%", "100%", "0%"] }}
        transition={{ ease: "easeOut", duration: 1, repeat: Infinity }}
        className="loading-dot"
      />
      <motion.span
        animate={{ y: ["0%", "100%", "0%"] }}
        transition={{ ease: "easeOut", duration: 1, delay: 0.43, repeat: Infinity }}
        className="loading-dot"
      />
      <motion.span
        animate={{ y: ["0%", "100%", "0%"] }}
        transition={{ ease: "easeOut", duration: 1, delay: 0.7, repeat: Infinity }}
        className="loading-dot"
      />
    </div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2250); // 2.25 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <AnimatedRoutes />
      )}
    </Router>
  );
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='app-container'
          >
            <Hero />
            <InformationTab />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='app-container'
          >
            <Contact />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

export default App;