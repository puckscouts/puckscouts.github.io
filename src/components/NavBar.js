import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/images/PuckScouts_TransparentLogo.png'; // Adjust the path as needed

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="PuckScouts Logo" height="80" /> {/* Your logo image */}
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/nhl">NHL</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ncaa">NCAA</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
