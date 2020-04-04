const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const authController = require("../../controllers/AuthController");

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', auth, authController.getUserBytoken);

module.exports = router;