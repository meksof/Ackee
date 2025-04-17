// Use the new Ackee initialization method
const { Ackee } = require('ackee-tracker');

exports.handler = async (event, context) => {
  const ackee = new Ackee({
    database: {
      url: process.env.ACKEE_MONGODB // MongoDB Atlas connection string
    }
  });

  return ackee.server(event, context);
};