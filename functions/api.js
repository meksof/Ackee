const { createServer } = require('ackee-tracker');

module.exports = createServer({
  database: {
    url: process.env.ACKEE_MONGODB // Use environment variable
  }
});