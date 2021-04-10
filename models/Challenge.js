const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    cat: { type: String, required: true },
    key: { type: String, required: true },
})

// const zooAnimalsSchema = new Schema({ any: Array })
// const farmAnimalsSchema = new Schema({ any: Array })
// const placesSchema = new Schema({ any: Array })
// const fruitsVegetablesSchema = new Schema({ any: Array })

const challengeSchema = new Schema({
    names: [categorySchema],
    data: {
        zooAnimals: { any: Array },
        farmAnimals: { any: Array },
        places: { any: Array },
        fruitsVegetables: { any: Array },
    },
});

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = Challenge;
