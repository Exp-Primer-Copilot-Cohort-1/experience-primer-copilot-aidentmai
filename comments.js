// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the static files in the public folder
app.use(express.static('public'));

// Get the comments from the comments.json file
const fs = require('fs');
const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Get the comments from the comments.json file
const comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Create a route for the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the web server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});