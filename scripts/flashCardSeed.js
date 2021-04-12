var mongoose = require("mongoose");
var db = require("../models/");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/learningapp", {
  useNewUrlParser: true,
});

var flashCardSeed = [
  {
    englishWord: "green",
    word: "verde",
  },
  {
    englishWord: "white",
    word: "blanco",
  },
];

db.Flashcard.deleteMany({})
  .then(
    db.Flashcard.collection.insertMany(flashCardSeed).then((data) => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });