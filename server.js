// Require express
const express = require('express');

// Require body-parser and cors packages
const bodyParser = require('body-parser')
const cors = require('cors')

// Call express method
const app = express();
module.exports = app;

// Add middleware for handling CORS requests from index.html
app.use(cors())

// Add middware for parsing request bodies here:
app.use(bodyParser.json())

// Define and mount apiRouter below at '/api' path
const apiRouter = require('./server/api');
app.use('/api', apiRouter)

const PORT = process.env.PORT || 4001;

if (!module.parent) { 
  // Server will listen on PORT 4001
  app.listen(PORT, () => {
    console.log(`The server is listening on PORT ${PORT}.`)
  })
}
