// functions/api.js
const { createServer } = require('ackee-tracker');
const Database = require('better-sqlite3');

// Netlify's writable directory
const DB_PATH = process.env.ACKEE_SQLITE_PATH || '/tmp/ackee.db'; 

// Initialize SQLite
const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL'); // Improve performance

module.exports = createServer({
  // Mock MongoDB adapter with SQLite
  database: {
    async connect() {
      return {
        collection: () => ({
          find: () => db.prepare('SELECT * FROM records').all(),
          insertOne: (data) => db.prepare(
            'INSERT INTO records (id, data) VALUES (?, ?)'
          ).run(data.id, JSON.stringify(data))
        })
      };
    }
  }
});