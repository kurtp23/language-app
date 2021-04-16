const mongoose = require("mongoose");

const Example = require("../models/stats");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/learningapp", {
  useNewUrlParser: true,
});

const data = {
  date: new Date(Date.now()),
  flashcardVal: 10,
  challengeVal: 42
};

Example.create(data)
  .then(dbExample => {
    console.log(dbExample);
  })
  .catch(({ message }) => {
    console.log(message);
  });
