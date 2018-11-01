const MongoClient = require('mongodb').MongoClient;

function getDB() {
  return MongoClient.connect(process.env.DB_CONNECTION);
}

module.exports = {
  getDB,
};
