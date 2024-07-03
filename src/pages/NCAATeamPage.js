import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import teams from '../data/teams';
import './NCAATeamPage.css';

const NCAATeamPage = () => {
  const { teamName } = useParams();
  const team = teams[teamName.toLowerCase()];

  const [sortConfig, setSortConfig] = useState(null);

  useEffect(() => {
    // Scroll to the top of the page whenever the teamName changes
    window.scrollTo(0, 0);
  }, [teamName]);

  const sortedRoster = React.useMemo(() => {
    if (!team) return [];
    let sortableRoster = [...team.roster];
    if (sortConfig !== null) {
      sortableRoster.sort((a, b) => {
        if (sortConfig.key === 'year') {
          const yearOrder = ['Fr', 'So', 'Jr', 'Sr', 'Gr'];
          return (
            (yearOrder.indexOf(a.year) - yearOrder.indexOf(b.year)) * (sortConfig.direction === 'ascending' ? 1 : -1)
          );
        }
        if (sortConfig.key === 'dob') {
          const [monthA, dayA, yearA] = a.dob.split('/').map(Number);
          const [monthB, dayB, yearB] = b.dob.split('/').map(Number);
          const dateA = new Date(yearA, monthA - 1, dayA);
          const dateB = new Date(yearB, monthB - 1, dayB);
          return (dateA - dateB) * (sortConfig.direction === 'ascending' ? 1 : -1);
        }
        if (sortConfig.key === 'nhlDraft') {
          if (a.nhlDraft && b.nhlDraft) {
            const [yearA, teamA, roundA] = a.nhlDraft.split('-');
            const [yearB, teamB, roundB] = b.nhlDraft.split('-');

            if (roundA !== roundB) {
              return (parseInt(roundA) - parseInt(roundB)) * (sortConfig.direction === 'ascending' ? 1 : -1);
            }
            if (yearA !== yearB) {
              return (parseInt(yearB) - parseInt(yearA)) * (sortConfig.direction === 'ascending' ? 1 : -1);
            }
            return teamA.localeCompare(teamB) * (sortConfig.direction === 'ascending' ? 1 : -1);
          } else if (a.nhlDraft) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          } else if (b.nhlDraft) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        }
        if (sortConfig.key === 'height') {
          const parseHeight = (height) => {
            const [feet, inches] = height.split('-').map(Number);
            return feet * 12 + inches;
          };
          return (
            (parseHeight(a.height) - parseHeight(b.height)) * (sortConfig.direction === 'ascending' ? 1 : -1)
          );
        }
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableRoster;
  }, [team, sortConfig]);

  const requestSort = key => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = name => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div className="team-page-container">
      <div className="team-info">
        <h1 className="team-name">{team.name}</h1>
        <p className="team-record"><span className="bold-text">23-24 Record:</span> {team.record.W}-{team.record.L}-{team.record.T}</p>
        <div className="team-logo-box">
          <img src={team.logo} alt={team.name} className="team-logo" />
        </div>
      </div>
      <div className="team-roster">
        <h2>Team Roster</h2>
        <table className="roster-table">
          <thead>
            <tr>
              <th onClick={() => requestSort('name')} className={getClassNamesFor('name')}>Player Name</th>
              <th onClick={() => requestSort('number')} className={getClassNamesFor('number')}>Number</th>
              <th onClick={() => requestSort('position')} className={getClassNamesFor('position')}>Position</th>
              <th onClick={() => requestSort('year')} className={getClassNamesFor('year')}>Year</th>
              <th onClick={() => requestSort('height')} className={getClassNamesFor('height')}>Ht</th>
              <th onClick={() => requestSort('weight')} className={getClassNamesFor('weight')}>Wt</th>
              <th onClick={() => requestSort('dob')} className={getClassNamesFor('dob')}>DOB</th>
              <th onClick={() => requestSort('nhlDraft')} className={getClassNamesFor('nhlDraft')}>NHL Draft</th>
            </tr>
          </thead>
          <tbody>
            {sortedRoster.map((player, index) => (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.number}</td>
                <td>{player.position}</td>
                <td>{player.year}</td>
                <td>{player.height}</td>
                <td>{player.weight}</td>
                <td>{player.dob}</td>
                <td>{player.nhlDraft || ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NCAATeamPage;
