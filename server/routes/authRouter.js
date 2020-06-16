const express = require('express');
const router = express.Router();
// Imports auth functions from the auth handler
const { register, login } = require('../handlers/auth');

// Sign up new user
router.post('/register', register);

// Sign in user
router.post('/login', login);

module.exports = router;
