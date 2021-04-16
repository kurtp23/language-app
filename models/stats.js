const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statsSchema = new Schema({
    date: {
      type: Date,
      default: Date.now
    },
    flashcardVal: {
      type: Number,
      required: "enter flashcard amount"
    },
    challengeVal: {
      type: Number,
      required: "enter challenges amount"
    }    
  });

const Stats = mongoose.model('Stats', statsSchema);

module.exports = Stats;