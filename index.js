const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Node.js app is running inside Docker with Nginx & Jenkins!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
