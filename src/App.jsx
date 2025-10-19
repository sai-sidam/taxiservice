import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceOfferings from './components/ServiceOfferings';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServiceOfferings />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;