const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user: { type: String, required: "Must have a username!" },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
