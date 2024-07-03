import React from 'react';
import { Link } from 'react-router-dom';
import nhlTeams from '../data/nhlTeams'; // Ensure you have a data file with NHL team information
import usMap from '../assets/images/US_Map.png'; // Ensure you have a US map image
import './NHLPage.css';

const westernConferenceTeams = nhlTeams.filter(team => team.conference === 'Western').sort((a, b) => a.name.localeCompare(b.name));
const easternConferenceTeams = nhlTeams.filter(team => team.conference === 'Eastern').sort((a, b) => a.name.localeCompare(b.name));

function NHLPage() {
  return (
    <div className="nhl-page">
      <div className="info-text">
        <p>Click a team to see more!</p>
      </div>
      <div className="conference-list western-conference">
        <h2>Western Conference</h2>
        <ul>
          {westernConferenceTeams.map(team => (
            <li key={team.name}>
              <Link to={`/nhl/team/${team.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <img src={team.logo} alt={team.name} className="team-logo" />
                <span>{team.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="nhl-container">
        <div className="nhl-map">
          <img src={usMap} alt="Map of the United States" className="nhl-map-image" />
          {nhlTeams.map(team => (
            <Link key={team.name} to={`/nhl/team/${team.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <img 
                src={team.logo} 
                alt={team.name} 
                className="nhl-team-logo" 
                style={{ top: team.top, left: team.left }}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="conference-list eastern-conference">
        <h2>Eastern Conference</h2>
        <ul>
          {easternConferenceTeams.map(team => (
            <li key={team.name}>
              <Link to={`/nhl/team/${team.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <img src={team.logo} alt={team.name} className="team-logo" />
                <span>{team.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NHLPage;
