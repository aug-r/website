const MongoClient = require('mongodb').MongoClient;

const connection = null;

function getDB() {
  if (!connection) {
    connection = MongoClient.connect(process.env.DB_CONNECTION);
  }
  return connection;
}

function getCollection(name) {
  
}

module.exports = {
  getDB,
};
