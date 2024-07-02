const express = require('express');
const mysql = require('mysql2'); // Ensure using mysql2
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let dbConfig;

if (process.env.JAWSDB_URL) {
  const url = new URL(process.env.JAWSDB_URL);
  dbConfig = {
    host: url.hostname,
    user: url.username,
    password: url.password,
    database: url.pathname.split('/')[1],
    port: url.port,
  };
} else {
  dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };
}

console.log('DB Config:', dbConfig); // Added for debugging purposes

const db = mysql.createConnection(dbConfig);

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
