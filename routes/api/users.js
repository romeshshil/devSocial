const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const validator = require("../../validators/user");
const userController = require("../../controllers/UserController");
// @route  POST api/users
// @desc   Register User Route;
// @access  Public

router.post('/', validator.createUser, userController.createUser);

module.exports = router;