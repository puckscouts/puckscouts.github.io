import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import teams from '../data/teams';
import conferences from '../data/conferences';
import './NCAATeamPage.css';

const NCAATeamPage = () => {
  const { teamName } = useParams();

  const getTeamData = (teamName) => {
    const teamData = teams[teamName.toLowerCase()];
    for (const conference of conferences) {
      const team = conference.teams.find(t => t.name.toLowerCase() === teamName.toLowerCase());
      if (team && teamData) {
        return {
          conference: conference.name,
          logo: team.logo,
          record: team.record,
          ...teamData
        };
      }
    }
    return null;
  };

  const team = getTeamData(teamName);

  const [view, setView] = useState('roster'); // 'roster' or 'statistics'
  const [sortConfig, setSortConfig] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [teamName]);

  const sortedRoster = React.useMemo(() => {
    if (!team || !team.roster) return [];
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

  const sortedStatistics = React.useMemo(() => {
    if (!team || !team.statistics) return [];
    let sortableStatistics = [...team.statistics.players];
    if (sortConfig !== null) {
      sortableStatistics.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableStatistics;
  }, [team, sortConfig]);

  const sortedGoaltending = React.useMemo(() => {
    if (!team || !team.statistics) return [];
    let sortableGoaltending = [...team.statistics.goalies];
    if (sortConfig !== null) {
      sortableGoaltending.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableGoaltending;
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
        <h1 className="team-name">{teamName}</h1>
        <p className="team-record"><span className="bold-text">23-24 Record:</span> {team.record.W}-{team.record.L}-{team.record.T}</p>
        <div className="team-logo-box">
          <img src={team.logo} alt={teamName} className="team-logo" />
        </div>
      </div>
      <div className="view-toggle">
        <button onClick={() => setView('roster')} className={view === 'roster' ? 'active' : ''}>Roster</button>
        <button onClick={() => setView('statistics')} className={view === 'statistics' ? 'active' : ''}>Statistics</button>
      </div>
      {view === 'roster' ? (
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
                <th onClick={() => requestSort('hometown')} className={getClassNamesFor('hometown')}>Hometown</th>
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
                  <td>{player.hometown}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="team-statistics">
          <h2>Team Statistics</h2>
          <table className="statistics-table">
            <thead>
              <tr>
                <th onClick={() => requestSort('name')} className={getClassNamesFor('name')}>Player (Pos/Yr)</th>
                <th onClick={() => requestSort('gp')} className={getClassNamesFor('gp')}>GP</th>
                <th onClick={() => requestSort('g')} className={getClassNamesFor('g')}>G</th>
                <th onClick={() => requestSort('a')} className={getClassNamesFor('a')}>A</th>
                <th onClick={() => requestSort('pts')} className={getClassNamesFor('pts')}>Pts</th>
                <th onClick={() => requestSort('ptgm')} className={getClassNamesFor('ptgm')}>Pt/GP</th>
                <th onClick={() => requestSort('pen')} className={getClassNamesFor('pen')}>PEN</th>
                <th onClick={() => requestSort('pim')} className={getClassNamesFor('pim')}>PIM</th>
                <th onClick={() => requestSort('gwg')} className={getClassNamesFor('gwg')}>GWG</th>
                <th onClick={() => requestSort('ppg')} className={getClassNamesFor('ppg')}>PPG</th>
                <th onClick={() => requestSort('shg')} className={getClassNamesFor('shg')}>SHG</th>
                <th onClick={() => requestSort('eng')} className={getClassNamesFor('eng')}>ENG</th>
              </tr>
            </thead>
            <tbody>
              {sortedStatistics.map((stat, index) => (
                <tr key={index}>
                  <td>{`${stat.name} / ${stat.position} / ${stat.year}`}</td>
                  <td>{stat.gp}</td>
                  <td>{stat.g}</td>
                  <td>{stat.a}</td>
                  <td>{stat.pts}</td>
                  <td>{stat.ptgm}</td>
                  <td>{stat.pen}</td>
                  <td>{stat.pim}</td>
                  <td>{stat.gwg}</td>
                  <td>{stat.ppg}</td>
                  <td>{stat.shg}</td>
                  <td>{stat.eng}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Goaltending Statistics</h2>
          <table className="statistics-table">
            <thead>
              <tr>
                <th onClick={() => requestSort('name')} className={getClassNamesFor('name')}>Player (Yr)</th>
                <th onClick={() => requestSort('gp')} className={getClassNamesFor('gp')}>GP</th>
                <th onClick={() => requestSort('w')} className={getClassNamesFor('w')}>W</th>
                <th onClick={() => requestSort('l')} className={getClassNamesFor('l')}>L</th>
                <th onClick={() => requestSort('t')} className={getClassNamesFor('t')}>T</th>
                <th onClick={() => requestSort('ga')} className={getClassNamesFor('ga')}>GA</th>
                <th onClick={() => requestSort('gaa')} className={getClassNamesFor('gaa')}>GAA</th>
                <th onClick={() => requestSort('sv')} className={getClassNamesFor('sv')}>SV</th>
                <th onClick={() => requestSort('sv%')} className={getClassNamesFor('sv%')}>SV%</th>
                <th onClick={() => requestSort('sho')} className={getClassNamesFor('sho')}>SHO</th>
              </tr>
            </thead>
            <tbody>
              {sortedGoaltending.map((goalie, index) => (
                <tr key={index}>
                  <td>{`${goalie.name} / ${goalie.year}`}</td>
                  <td>{goalie.gp}</td>
                  <td>{goalie.w}</td>
                  <td>{goalie.l}</td>
                  <td>{goalie.t}</td>
                  <td>{goalie.ga}</td>
                  <td>{goalie.gaa}</td>
                  <td>{goalie.sv}</td>
                  <td>{goalie['sv%']}</td>
                  <td>{goalie.sho}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default NCAATeamPage;
