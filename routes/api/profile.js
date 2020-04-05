const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const profileValidator = require("../../validators/profile");
const userController = require("../../controllers/UserController");
const profileController = require("../../controllers/ProfileController");

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, profileController.getUserProfile);

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post('/', [auth, profileValidator.createUpdateProfile], profileController.createOrUpdateProfile);


// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', profileController.getAllProfile);

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', profileController.getProfilebyUserID);

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, profileController.deleteProfile);

// @route    PUT api/profile/experience
// @desc     Add profile experience
// @access   Private
router.put('/experience', [auth, profileValidator.addExperience], profileController.addProfileExperice);

// @route    DELETE api/profile/experience/:exp_id
// @desc     Delete experience from profile
// @access   Private
router.delete('/experience/:exp_id', auth, profileController.deleteProfileExperience);

// @route    PUT api/profile/education
// @desc     Add profile education
// @access   Private
router.put('/education', [auth, profileValidator.addEducation], profileController.addProfileEducation);

// @route    DELETE api/profile/education/:edu_id
// @desc     Delete education from profile
// @access   Private
router.delete('/education/:edu_id', auth, profileController.deleteProfileEducaiton);

// @route    GET api/profile/github/:username
// @desc     Get user repos from Github
// @access   Public
router.get('/github/:username', profileController.getGithubRepo);







module.exports = router;