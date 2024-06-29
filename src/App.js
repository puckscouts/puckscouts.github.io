// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NHLPage from './pages/NHLPage';
import NCAAPage from './pages/NCAAPage';
import TeamPage from './pages/TeamPage';
import PlayerPage from './pages/PlayerPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nhl" element={<NHLPage />} />
        <Route path="/ncaa" element={<NCAAPage />} />
        <Route path="/team/:teamId" element={<TeamPage />} />
        <Route path="/player/:playerId" element={<PlayerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
