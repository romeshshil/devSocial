const { validationResult } = require('express-validator/check');


exports.createUser = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.send("User Registation Route");
}