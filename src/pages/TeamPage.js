import React from 'react';
import { useParams } from 'react-router-dom';
import conferences from '../data/conferences';
import './TeamPage.css';

const TeamPage = () => {
  const { teamName } = useParams();
  const allTeams = conferences.flatMap(conference => conference.teams);
  const team = allTeams.find(team => team.name.toLowerCase().replace(/\s+/g, '-') === teamName);

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div className="team-page-container">
      <h1 className="team-name">{team.name}</h1>
      <div className="team-logo-box">
        <img src={team.logo} alt={team.name} className="team-logo" />
      </div>
    </div>
  );
};

export default TeamPage;
