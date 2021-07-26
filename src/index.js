require('express-async-errors');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json()); // insert body into req
app.use(routes);
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('🔥🔥 server running at http://localhost:3000 🔥🔥'));
