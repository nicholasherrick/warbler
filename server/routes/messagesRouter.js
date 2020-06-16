const express = require('express');
const router = express.Router({ mergeParams: true }); // mergeParams allows access to id inside this router

const {
  createMessage,
  getMessage,
  deleteMessage,
} = require('../handlers/messages');

// Prefix = POST - /api/users/:id/messages
router.route('/').post(createMessage);

// Prefix = GET/DELETE - /api/users/:id/messages/messageId
router.route('/:message_id').get(getMessage).delete(deleteMessage);

module.exports = router;
