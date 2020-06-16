// Requirements
require('dotenv').config();
const express = require('express');
// Initialize express
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/authRouter');
const messagesRoutes = require('./routes/messagesRouter');
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');

// Set the Port
const PORT = process.env.PORT || 3001;

// Define what the app needs to use
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use(
  '/api/users/:id/messages',
  loginRequired,
  ensureCorrectUser,
  messagesRoutes
);

// Logic for requests with incorrect route (404)
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Tell app to use the error handler when triggered by any incoming middleware with an error
app.use(errorHandler);

// Start the server
app.listen(PORT, function () {
  console.log(`Server running on port: ${PORT}`);
});
