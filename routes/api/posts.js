const auth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const postValidator = require("../../validators/post");
const postController = require("../../controllers/PostController");

// @route    POST api/posts
// @desc     Create a post
// @access   Private
router.post('/', [auth, postValidator.createPost], postController.createPost);

// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.get('/', auth, postController.getAllPosts);

// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private
router.get('/:id', auth, postController.getPostById);

// @route    DELETE api/posts/:id
// @desc     Delete a post
// @access   Private
router.delete('/:id', auth, postController.deletePostByID);

// @route    PUT api/posts/like/:id
// @desc     Like a post
// @access   Private
router.put('/like/:id', auth, postController.postLike);

// @route    PUT api/posts/unlike/:id
// @desc     Unlike a post
// @access   Private
router.put('/unlike/:id', auth, postController.postUnlike);

// @route    POST api/posts/comment/:id
// @desc     Comment on a post
// @access   Private
router.post('/comment/:id', [auth, postValidator.postComment], postController.postComment);

// @route    DELETE api/posts/comment/:id/:comment_id
// @desc     Delete comment
// @access   Private
router.delete('/comment/:id/:comment_id', auth, postController.postCommentDelete);


module.exports = router;