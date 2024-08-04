// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('project dev ops');
});

// Add a new route
app.get('/new-route', (req, res) => {
  res.send('This is a new route!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
