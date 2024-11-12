import React from 'react';
import Hero from './components/Hero';
import InformationTab from './components/InformationTab';
import './index.css'; // Ensure this import is present

interface AppProps {
}

const App: React.FC<AppProps> = () => {
  
  return (
    <div>
      <Hero />
      <InformationTab />
    </div>
  );
};

export default App;