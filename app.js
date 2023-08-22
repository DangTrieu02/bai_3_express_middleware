const express = require('express');
const app = express();

app.use((req, res, next) => {
  const currentTime = new Date().toLocaleString();
  console.log(`[${currentTime}] - ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.json('Welcome to our website!');
});

app.get('/about', (req, res) => {
  res.json('About us');
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
