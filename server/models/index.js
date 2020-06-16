const mongoose = require('mongoose');
// Enable MongoDB debugger
mongoose.set('debug', true);
// Define promise library (ES2015 Promises)
mongoose.Promise = Promise;
// Connect to database
mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
});

module.exports.User = require('./user');
module.exports.Message = require('./message');
