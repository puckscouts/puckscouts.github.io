const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.JAWSDB_URL ? process.env.JAWSDB_URL.split('@')[1].split('/')[0] : process.env.DB_HOST,
  user: process.env.JAWSDB_URL ? process.env.JAWSDB_URL.split('@')[0].split(':')[1].split('//')[1] : process.env.DB_USER,
  password: process.env.JAWSDB_URL ? process.env.JAWSDB_URL.split('@')[0].split(':')[2] : process.env.DB_PASSWORD,
  database: process.env.JAWSDB_URL ? process.env.JAWSDB_URL.split('/')[1] : process.env.DB_NAME
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

app.get('/api/teams', (req, res) => {
  const sql = 'SELECT * FROM teams';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/teams/:id', (req, res) => {
  const teamId = req.params.id;
  const sql = `
    SELECT teams.name as team_name, players.id as player_id, players.name as player_name
    FROM teams
    LEFT JOIN players ON teams.id = players.team_id
    WHERE teams.id = ?
  `;
  db.query(sql, [teamId], (err, results) => {
    if (err) throw err;
    const team = {
      id: teamId,
      name: results[0].team_name,
      roster: results.map(player => ({
        id: player.player_id,
        name: player.player_name
      }))
    };
    res.json(team);
  });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
