var mongoose = require("mongoose");
var db = require("../models/");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/learningapp", {
  useNewUrlParser: true,
});

var userSeed = [
  {
    username: "kurt Phillips",

    email: "kurt@phillips",

    fire_id: "1233wwedx",

    userCreated: new Date(Date.now()),

    language: "spa"
  },
  {
    username: "user2",

    email: "user@2",

    fire_id: "12fdsghg",

    userCreated: new Date(Date.now()),
    
    language: "spa"
  },
];
db.User.deleteMany({})
  .then(
    db.User.collection.insertMany(userSeed).then((data) => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
