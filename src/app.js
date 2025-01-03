const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../public/html/index.html');
  res.sendFile(filePath);
});

app.listen(8080);