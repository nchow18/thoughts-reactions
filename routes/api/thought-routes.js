const router = require('express').Router();

const {
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/<user-id>
router
  .route('/:userId')
  .post(addUser);

// /api/thoughts/<user-id>/<comment-id>
router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

// /api/thoughts/<user-id>/<comment-id>/<reaction-id>
router
.route('/:userId/:thoughtId/:reactionId')
  .delete(removeReaction);

module.exports = router;
