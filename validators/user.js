const { check } = require('express-validator');


exports.createUser = [check('name', 'Name is required')
    .not()
    .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
        'password',
        'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
];


exports.userLoginValidator = [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
];