const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const authController = require("../../controllers/AuthController");
const validator = require("../../validators/user");
// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', auth, authController.getUserBytoken);


// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public

router.post('/', validator.userLoginValidator, authController.userLogin);

module.exports = router;