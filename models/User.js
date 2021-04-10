const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: { type: String, required: "Must have a username!" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required",
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },

  userCreated: {
    type: Date,
    default: Date.now,
  },
});
