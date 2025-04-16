// scripts/init-db.js
const Database = require('better-sqlite3');
const fs = require('fs');

const DB_PATH = '/tmp/ackee.db';

// Ensure /tmp exists
if (!fs.existsSync('/tmp')) fs.mkdirSync('/tmp');

// Initialize DB
const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS records (
    id TEXT PRIMARY KEY,
    data TEXT
  )
`);
console.log('SQLite database initialized at', DB_PATH);