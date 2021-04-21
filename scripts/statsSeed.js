var mongoose = require('mongoose');
var db = require('../models/');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/learningapp', {
  useNewUrlParser: true,
});

var statsSeed = [
  {
    userID: '1111aaa',
    stats: {
      date:new Date(Date.now()),
      flashcardVal:10,
      challengeVal: 50
    }
  }
];

db.Stats.deleteMany({})
  .then(
    db.Stats.collection.insertMany(statsSeed).then((data) => {
      console.log(data.result.n + ' records inserted!');
      process.exit(0);
    })
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
