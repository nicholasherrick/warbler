// Requirements
const express = require('express');
// Initialize express
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Set the Port
const PORT = process.env.PORT || 3001;

// Define what the app needs to use
app.use(cors());
app.use(bodyParser.json());

// Routes will be put here

// Logic for requests with incorrect route (404)
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Start the server
app.listen(PORT, function () {
  console.log(`Server running on port: ${PORT}`);
});
