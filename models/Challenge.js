const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    cat: { type: String, required: true },
    key: { type: String, required: true },
})

const zooAnimalsSchema = new Schema({ type: String, required: true })
const farmAnimalsSchema = new Schema({ type: String, required: true })
const placesSchema = new Schema({ type: String, required: true })
const fruitsVegetablesSchema = new Schema({ type: String, required: true })

const challengeSchema = new Schema({
    names: [categorySchema],
    data: {
        zooAnimals: [zooAnimalsSchema],
        farmAnimals: [farmAnimalsSchema],
        places: [placesSchema],
        fruitsVegetables: [fruitsVegetablesSchema],
    },
});

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = Challenge;