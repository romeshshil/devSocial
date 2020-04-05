const { check } = require('express-validator');


exports.createUpdateProfile = [
    check('status', 'Status is required')
    .not()
    .isEmpty(),
    check('skills', 'Skills is required')
    .not()
    .isEmpty()
];

exports.addExperience = [
    check('title', 'Title is required')
    .not()
    .isEmpty(),
    check('company', 'Company is required')
    .not()
    .isEmpty(),
    check('from', 'From date is required and needs to be from the past')
    .not()
    .isEmpty()
    .custom((value, { req }) => (req.body.to ? value < req.body.to : true))
];

exports.addEducation = [
    check('school', 'School is required')
    .not()
    .isEmpty(),
    check('degree', 'Degree is required')
    .not()
    .isEmpty(),
    check('fieldofstudy', 'Field of study is required')
    .not()
    .isEmpty(),
    check('from', 'From date is required and needs to be from the past')
    .not()
    .isEmpty()
    .custom((value, { req }) => (req.body.to ? value < req.body.to : true))
];