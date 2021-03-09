// Bring in our dependencies
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');

app.use(express.static(path.join(__dirname, 'routes', 'reactBuild')));
//  Connect all our routes to our application
app.use('/', routes);

// Turn on that server!
app.listen(3001, () => {
  console.log('App listening on port 3000');
});