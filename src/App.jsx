import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OldHome from './pages/OldHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/old-home" element={<OldHome />} />
      </Routes>
    </Router>
  );
}

export default App;
