import React from 'react';
import './ConferenceTable.css';

const ConferenceTable = ({ conference }) => {
  return (
    <div className="conference-table">
      <div className="conference-header">
        <img src={conference.logo} alt={`${conference.name} logo`} className="conference-logo" />
        {conference.name === "Independents" && <h2>{conference.name}</h2>}
      </div>
      <div className="teams-list">
        {conference.teams.map((team) => (
          <div key={team.name} className="team">
            <img src={team.logo} alt={`${team.name} logo`} className="team-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConferenceTable;
