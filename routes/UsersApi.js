const Router = require('express').Router();
const User = require('../models/User');

Router.post('/', async (req, res) => {
  console.log('inside users post', req.body);
  const user = new User(req.body);
  User.create(user)
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

Router.get('/:id', async (req, res) => {
  User.find({ fire_id: req.params.id })
    .then((data) => {
      console.log('this is user from db', data);
      res.json(data);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
});

Router.put('/:id', async (req, res) => {
  User.findOneAndUpdate(
    { fire_id: req.params.id },
    { $set: { username: req.body.username } },
    function (err, doc) {
      if (err) {
        throw err;
      } else {
        console.log('Updated');
        res.send('ok');
      }
    }
  );
});
Router.put('/lang/:id', async (req, res) => {
  User.findOneAndUpdate(
    { fire_id: req.params.id },
    { $set: { language: req.body.language } },
    function (err, doc) {
      if (err) {
        throw err;
      } else {
        console.log('Updated');
        res.send('ok');
      }
    }
  );
});

// puts a stat based on fire_id into user's stats array
Router.put('/stats/:id', async (req, res) => {
  console.log('PUT for new Stat: ', req.params.id, ' and ', req.body);

  User.findOne({ fire_id: req.params.id }).then((data) => {
    console.log('Found User', data);
    // now inject new book data
    const newStatsArray = [...data.stats, req.body];

    User.updateOne(
      { fire_id: req.params.id },
      {
        stats: newStatsArray,
      }
    )
      .then((data) => {
        // final
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log('error in put stats request ', err);
        res.status(500).json(err);
      });
  });
});

module.exports = Router;
