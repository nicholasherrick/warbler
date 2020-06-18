const express = require('express');
const router = express.Router({ mergeParams: true }); // mergeParams allows access to id inside this router

const {
  createMessage,
  getMessage,
  deleteMessage,
  editMessage,
} = require('../handlers/messages');

// Prefix = POST - /api/users/:id/messages
router.route('/').post(createMessage);

// Prefix = GET/DELETE/PUT - /api/users/:id/messages/messageId
router
  .route('/:message_id')
  .get(getMessage)
  .delete(deleteMessage)
  .put(editMessage);

module.exports = router;
