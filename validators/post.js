const { check } = require('express-validator');


exports.createPost = [
    check('text', 'Text is required')
    .not()
    .isEmpty()
];


exports.postComment = [
    check('text', 'Text is required')
    .not()
    .isEmpty()
];