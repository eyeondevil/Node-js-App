// server.js
const express = require('express');
const path = require('path');
const db = require('./db');  // Import the MongoDB connection

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Simple route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/users', (req, res) => {
    const collection = db.collection('users');
  
    collection.find({}).toArray((err, users) => {
      if (err) {
        res.status(500).send('Error fetching users');
        return;
      }
      res.json(users);  // Send the results as JSON
    });
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});