import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NHLPage from './pages/NHLPage';
import NCAAPage from './pages/NCAAPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css'; // Import the main CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nhl" element={<NHLPage />} />
            <Route path="/ncaa" element={<NCAAPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer /> {/* Footer will be at the bottom of the page content */}
      </div>
    </Router>
  );
}

export default App;
