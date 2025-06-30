import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import OurWork from './pages/OurWork.jsx';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage'

  function App() {
    return (
      <Router>
    
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Projects" element={<ProjectsPage />} />
        </Routes>

      </Router>
    );
  }

export default App
