import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import teams from '../data/teams';
import conferences from '../data/conferences';
import './NCAATeamPage.css';

// Mapping of URL-friendly team names to JSON data team names
const teamNameMapping = {
  'air-force': 'air-force',
  'aic': 'american-international',
  'army-west-point': 'army',
  'bentley': 'bentley',
  'canisius': 'canisius',
  'holy-cross': 'holy-cross',
  'mercyhurst': 'mercyhurst',
  'niagara': 'niagara',
  'robert-morris': 'robert-morris',
  'rit': 'rit',
  'sacred-heart': 'sacred-heart',
  'michigan': 'michigan',
  'michigan-state': 'michigan-state',
  'minnesota': 'minnesota',
  'notre-dame': 'notre-dame',
  'ohio-state': 'ohio-state',
  'penn-state': 'penn-state',
  'wisconsin': 'wisconsin',
  'augustana': 'augustana',
  'bemidji-state': 'bemidji-state',
  'bowling-green': 'bowling-green',
  'ferris-state': 'ferris-state',
  'lake-superior-state': 'lake-superior',
  'michigan-tech': 'michigan-tech',
  'minnesota-state': 'minnesota-state',
  'northern-michigan': 'northern-michigan',
  'st.-thomas': 'st-thomas',
  'brown': 'brown',
  'clarkson': 'clarkson',
  'colgate': 'colgate',
  'cornell': 'cornell',
  'dartmouth': 'dartmouth',
  'harvard': 'harvard',
  'princeton': 'princeton',
  'quinnipiac': 'quinnipiac',
  'rensselaer': 'rensselaer',
  'st.-lawrence': 'st-lawrence',
  'union': 'union',
  'yale': 'yale',
  'boston-college': 'boston-college',
  'boston-university': 'boston-university',
  'uconn': 'uconn',
  'maine': 'maine',
  'massachusetts': 'massachusetts',
  'umass-lowell': 'umass-lowell',
  'merrimack': 'merrimack',
  'new-hampshire': 'new-hampshire',
  'northeastern': 'northeastern',
  'providence': 'providence',
  'vermont': 'vermont',
  'arizona-state': 'arizona-state',
  'colorado-college': 'colorado-college',
  'denver': 'denver',
  'miami': 'miami',
  'minnesota-duluth': 'minnesota-duluth',
  'north-dakota': 'north-dakota',
  'omaha': 'omaha',
  'st.-cloud-state': 'st-cloud-state',
  'western-michigan': 'western-michigan',
  'alaska': 'alaska',
  'alaska-anchorage': 'alaska-anchorage',
  'lindenwood': 'lindenwood',
  'long-island': 'liu',
  'stonehill': 'stonehill',
};

// Mapping of URL-friendly team names to display names
const displayNameMapping = {
  'air-force': 'Air Force',
  'aic': 'American International',
  'army-west-point': 'Army West Point',
  'bentley': 'Bentley',
  'canisius': 'Canisius',
  'holy-cross': 'Holy Cross',
  'mercyhurst': 'Mercyhurst',
  'niagara': 'Niagara',
  'robert-morris': 'Robert Morris',
  'rit': 'RIT',
  'sacred-heart': 'Sacred Heart',
  'michigan': 'Michigan',
  'michigan-state': 'Michigan State',
  'minnesota': 'Minnesota',
  'notre-dame': 'Notre Dame',
  'ohio-state': 'Ohio State',
  'penn-state': 'Penn State',
  'wisconsin': 'Wisconsin',
  'augustana': 'Augustana',
  'bemidji-state': 'Bemidji State',
  'bowling-green': 'Bowling Green',
  'ferris-state': 'Ferris State',
  'lake-superior-state': 'Lake Superior State',
  'michigan-tech': 'Michigan Tech',
  'minnesota-state': 'Minnesota State',
  'northern-michigan': 'Northern Michigan',
  'st.-thomas': 'St. Thomas',
  'brown': 'Brown',
  'clarkson': 'Clarkson',
  'colgate': 'Colgate',
  'cornell': 'Cornell',
  'dartmouth': 'Dartmouth',
  'harvard': 'Harvard',
  'princeton': 'Princeton',
  'quinnipiac': 'Quinnipiac',
  'rensselaer': 'Rensselaer',
  'st.-lawrence': 'St. Lawrence',
  'union': 'Union',
  'yale': 'Yale',
  'boston-college': 'Boston College',
  'boston-university': 'Boston University',
  'uconn': 'UConn',
  'maine': 'Maine',
  'massachusetts': 'Massachusetts',
  'umass-lowell': 'UMass Lowell',
  'merrimack': 'Merrimack',
  'new-hampshire': 'New Hampshire',
  'northeastern': 'Northeastern',
  'providence': 'Providence',
  'vermont': 'Vermont',
  'arizona-state': 'Arizona State',
  'colorado-college': 'Colorado College',
  'denver': 'Denver',
  'miami': 'Miami',
  'minnesota-duluth': 'Minnesota Duluth',
  'north-dakota': 'North Dakota',
  'omaha': 'Omaha',
  'st.-cloud-state': 'St. Cloud State',
  'western-michigan': 'Western Michigan',
  'alaska': 'Alaska',
  'alaska-anchorage': 'Alaska Anchorage',
  'lindenwood': 'Lindenwood',
  'long-island': 'Long Island',
  'stonehill': 'Stonehill',
};

const NCAATeamPage = () => {
  const { teamName } = useParams();

  const getTeamData = (teamName) => {
    const formattedTeamName = teamNameMapping[teamName] || teamName.replace(/-/g, ' ').toLowerCase();
    const teamData = teams[formattedTeamName];
    for (const conference of conferences) {
      const team = conference.teams.find(t => t.name.toLowerCase().replace(/\s+/g, '-') === teamName);
      if (team && teamData) {
        return {
          conference: conference.name,
          logo: team.logo,
          record: team.record,
          lastFiveGames: teamData.last_five_games,  // Fetch last five games data
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
        const aVal = parseFloat(a[sortConfig.key]) || a[sortConfig.key];
        const bVal = parseFloat(b[sortConfig.key]) || b[sortConfig.key];
        if (aVal < bVal) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aVal > bVal) {
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
        const aVal = parseFloat(a[sortConfig.key]) || a[sortConfig.key];
        const bVal = parseFloat(b[sortConfig.key]) || b[sortConfig.key];
        if (aVal < bVal) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aVal > bVal) {
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

  const displayTeamName = displayNameMapping[teamName] || teamName.replace(/-/g, ' ');

  return (
    <div className="team-page-container">
      <div className="team-info-container">
        <div className="team-info">
          <h1 className="team-name">{displayTeamName}</h1>
          <p className="team-record"><span className="bold-text">23-24 Record:</span> {team.record.W}-{team.record.L}-{team.record.T}</p>
          <div className="team-logo-box">
            <img src={team.logo} alt={displayTeamName} className="team-logo" />
          </div>
        </div>
        <div className="last-five-games">
          <h2>Last Five Games</h2>
          <table className="last-five-games-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Opponent</th>
                <th>Team Score</th>
                <th>Opponent Score</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {team.lastFiveGames.map((game, index) => (
                <tr key={index}>
                  <td>{game.date}</td>
                  <td>{game.time}</td>
                  <td>{game.team}</td>
                  <td>{game.team_score}</td>
                  <td>{game.opp_score}</td>
                  <td>{game.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
                <th onClick={() => requestSort('name')} className={getClassNamesFor('name')}>Goalie Name (Yr)</th>
                <th onClick={() => requestSort('gp')} className={getClassNamesFor('gp')}>GP</th>
                <th onClick={() => requestSort('w')} className={getClassNamesFor('w')}>W</th>
                <th onClick={() => requestSort('l')} className={getClassNamesFor('l')}>L</th>
                <th onClick={() => requestSort('t')} className={getClassNamesFor('t')}>T</th>
                <th onClick={() => requestSort('win%')} className={getClassNamesFor('win%')}>Win%</th>
                <th onClick={() => requestSort('ga')} className={getClassNamesFor('ga')}>GA</th>
                <th onClick={() => requestSort('min')} className={getClassNamesFor('min')}>Min</th>
                <th onClick={() => requestSort('gaa')} className={getClassNamesFor('gaa')}>GAA</th>
                <th onClick={() => requestSort('sho')} className={getClassNamesFor('sho')}>SHO</th>
                <th onClick={() => requestSort('sv')} className={getClassNamesFor('sv')}>SV</th>
                <th onClick={() => requestSort('sv%')} className={getClassNamesFor('sv%')}>SV%</th>
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
              <td>{goalie['win%']}</td>
              <td>{goalie.ga}</td>
              <td>{goalie.min}</td>
              <td>{goalie.gaa}</td>
              <td>{goalie.sho}</td>
              <td>{goalie.sv}</td>
              <td>{goalie['sv%']}</td>
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
