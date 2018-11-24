const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello, world!'
  });
});

app.post('/test', (req, res) => {
  const json = req.body;


  res.status(200).json({
    echo_message: json.message
  });
});

app.listen(8080, () => {
  console.log(`Listening on :8080`);
});