const db = require('../models');

exports.createMessage = async function (req, res, next) {
  try {
    let message = await db.Message.create({
      text: req.body.text,
      user: req.params.id,
    });
    let foundUser = await db.User.findById(req.params.id);
    foundUser.messages.push(message.id);
    await foundUser.save();
    let foundMessage = await (await db.Message.findById(message._id)).populate(
      'user',
      {
        username: true,
        profileImageUrl: true,
      }
    );
    return res.status(200).json(foundMessage);
  } catch (err) {
    return next(err);
  }
};

// Prefix = GET - /api/users/:id/messages/:message_id
exports.getMessage = async function (req, res, next) {
  try {
    let message = await db.Message.find(req.params.message_id);
    return res.status(200).json(message);
  } catch (err) {
    return next(err);
  }
};

// Prefix = DELETE - /api/users/:id/messages/:message_id
exports.deleteMessage = async function (req, res, next) {
  try {
    // Can't use findByIdAndRemove because of the remove hook in the message model
    let foundMessage = await db.Message.findById(req.params.message_id);
    await foundMessage.remove();
    return res.status(200).json(foundMessage);
  } catch (err) {
    return next(err);
  }
};

// Prefix = PUT = /api/users/:id/messages/:message_id
exports.editMessage = async function (req, res, next) {
  try {
    let foundMessage = await db.Message.findByIdAndUpdate(
      req.params.message_id,
      req.body
    );
    foundMessage.save();
    return res.status(200).json(foundMessage);
  } catch (err) {
    return next(err);
  }
};
