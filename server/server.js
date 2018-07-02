// our dependencies
const express = require('express');
const app = express();

const quiz = require('./data/quiz.json');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api', (request, response) => {
  response.json(quiz);
});


app.listen(4000, () => console.log('Listening on port 4000'));