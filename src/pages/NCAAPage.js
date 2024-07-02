import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NCAAPage.css';

function NCAAPage() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('/api/teams')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the data to verify
        setTeams(data);
      })
      .catch(error => {
        console.error('Error fetching teams:', error);
      });
  }, []);

  return (
    <div className="ncaa-container">
      <h1>D1 Teams</h1>
      <ul>
        {teams.map(team => (
          <li key={team.id}>
            <Link to={`/ncaa/team/${team.id}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NCAAPage;
