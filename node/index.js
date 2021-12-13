const express = require('express');

const app = express();
app.use(express.json());

app.get('/node', (request, response) => {
  return response.send({
    message: 'AWS 3.0',
    node: process.env.HOSTNAME
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Server started')
});