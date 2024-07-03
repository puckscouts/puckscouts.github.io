import React from 'react';
import { useParams } from 'react-router-dom';
import nhlTeams from '../data/nhlTeams';
import './NHLTeamPage.css';

const NHLTeamPage = () => {
  const { teamName } = useParams();
  const team = nhlTeams.find(t => t.name.toLowerCase().replace(/\s+/g, '-') === teamName);

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div className="nhl-team-page-container">
      <div className="nhl-team-info">
        <h1 className="nhl-team-name">{team.name}</h1>
        <div className="nhl-team-logo-box">
          <img src={team.logo} alt={team.name} className="nhl-team-logo" />
        </div>
      </div>
    </div>
  );
};

export default NHLTeamPage;
