const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flashCardSchema = new Schema({
  englishWord: { type: String, required: true },
  word: { type: String, required: true },
});

const FlashCard = mongoose.model('FlashCard', flashCardSchema);

module.exports = FlashCard;