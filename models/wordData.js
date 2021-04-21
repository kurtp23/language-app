const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  cat: { type: String, required: true },
  key: { type: String, required: true },
});

const wordDataSchema = new Schema({
  names: [categorySchema],
  greetings: { any: Array },
  data: {
    zooAnimals: { any: Array },
    farmAnimals: { any: Array },
    places: { any: Array },
    fruitsVegetables: { any: Array },
  },
});

const WordData = mongoose.model('WordData', wordDataSchema);

module.exports = WordData;
