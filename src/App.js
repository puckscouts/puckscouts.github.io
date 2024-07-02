import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NHLPage from './pages/NHLPage';
import NCAAPage from './pages/NCAAPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage'; // Import the TeamPage component
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ArticleCarousel from './components/ArticleCarousel';
import './App.css';

const ConditionalCarousel = () => {
  const location = useLocation();
  return location.pathname === '/' ? <ArticleCarousel /> : null;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <ConditionalCarousel />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nhl" element={<NHLPage />} />
            <Route path="/ncaa" element={<NCAAPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ncaa/team/:id" element={<TeamPage />} /> {/* Add route for team pages */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
