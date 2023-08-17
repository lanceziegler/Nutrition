const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
const { connectDB } = require('./utils/database');
require('dotenv').config();

app.use(cors());

const db = connectDB();

app.get('/api/home', (req, res) => {
  res.json({ message: 'Hello World', people: ['Lance', 'Caroline', 'Shelby'] });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
