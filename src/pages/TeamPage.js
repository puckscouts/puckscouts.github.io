import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TeamPage.css';

function TeamPage() {
  const { teamId } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    fetch(`https://puckscouts-167144ddf5d6.herokuapp.com/api/teams/${teamId}`)
      .then(response => response.json())
      .then(data => setTeam(data))
      .catch(error => console.error('Error fetching team:', error));
  }, [teamId]);

  if (!team) {
    return <div>Loading...</div>;
  }

  return (
    <div className="team-container">
      <h1>{team.name}</h1>
      <h2>Roster</h2>
      <ul>
        {team.roster.map(player => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeamPage;
