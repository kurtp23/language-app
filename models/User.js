const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema({
  date: { type: Date, default: Date.now },
  flashcardVal: { type: Number, default:0 },
  challengeVal: { type: Number, default:0 }
})

const userSchema = new Schema({
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
  fire_id: {
    type: String,
    unique: true,
  },

  userCreated: {
    type: Date,
    default: Date.now,
  },

  stats:[infoSchema]


});


const User = mongoose.model("User", userSchema);
module.exports = User , userSchema;



