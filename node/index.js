const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  return response.send({
    message: 'Helo World!',
    node: process.env.HOSTNAME
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Server started')
});