const mongoose = require('mongoose');
const config = require('config');
const db = config.get("mongoDBURI");
const connectDB = async() => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Mongoose DB connectin.....");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
module.exports = connectDB;