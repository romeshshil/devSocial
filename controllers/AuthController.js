const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// model import 
const User = require('./../models/User');

// get user by token 
exports.getUserBytoken = async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}