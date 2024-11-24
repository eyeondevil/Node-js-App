const { MongoClient } = require('mongodb');

// MongoDB URI and Database name
const uri = "mongodb://localhost:27017";
const dbName = "mydb";

let db;

// Create MongoDB client
MongoClient.connect(uri)
  .then(client => {
    db = client.db(dbName);
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error(err));

module.exports = db;