const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema({
  date: { type: Date, default: Date.now },


  flashcardVal: { type: Number, default:0 },
  challengeVal: { type: Number, default:0 }
})

const statsSchema = new Schema({ 
    userID:  {
      type: String,
      required: true
    }, 
    stats:[infoSchema]
  });



const Stats = mongoose.model('Stats', statsSchema);

module.exports = Stats;