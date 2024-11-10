import React from 'react';
import Hero from './components/Hero';
import './index.css'; // Ensure this import is present

interface AppProps {
}

const App: React.FC<AppProps> = () => {
  return (
    <Hero />
  );
};

export default App;