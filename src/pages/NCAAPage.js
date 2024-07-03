import React from 'react';
import { Link } from 'react-router-dom';
import conferences from '../data/conferences';
import './NCAAPage.css';

function NCAAPage() {
  const updatedConferences = [...conferences];

  // Swap NCHC and Atlantic Hockey
  const indexNCHC = updatedConferences.findIndex(conf => conf.name === 'NCHC');
  const indexAtlanticHockey = updatedConferences.findIndex(conf => conf.name === 'Atlantic Hockey');
  if (indexNCHC !== -1 && indexAtlanticHockey !== -1) {
    const temp = updatedConferences[indexNCHC];
    updatedConferences[indexNCHC] = updatedConferences[indexAtlanticHockey];
    updatedConferences[indexAtlanticHockey] = temp;
  }

  // Swap Hockey East and ECAC
  const indexHockeyEast = updatedConferences.findIndex(conf => conf.name === 'Hockey East');
  const indexECAC = updatedConferences.findIndex(conf => conf.name === 'ECAC');
  if (indexHockeyEast !== -1 && indexECAC !== -1) {
    const temp = updatedConferences[indexHockeyEast];
    updatedConferences[indexHockeyEast] = updatedConferences[indexECAC];
    updatedConferences[indexECAC] = temp;
  }

  return (
    <div className="ncaa-container">
      {updatedConferences.map(conference => (
        <div key={conference.name} className="conference">
          {conference.logo && (
            <img 
              src={conference.logo} 
              alt={`${conference.name} logo`} 
              className={`conference-logo ${conference.name === 'Big Ten' ? 'big-ten-logo' : ''}`} 
            />
          )}
          {!conference.logo && <h2 className="conference-name">{conference.name}</h2>}
          <div className="teams">
            {conference.teams.map(team => (
              <Link key={team.name} to={`/ncaa/team/${team.name.toLowerCase().replace(/\s+/g, '-')}`} className="team-logo-link">
                <div className="team-box">
                  <img src={team.logo} alt={team.name} className="team-logo" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NCAAPage;
