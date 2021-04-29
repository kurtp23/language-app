const Router = require('express').Router();
const Stats = require('../models/stats.js');

Router.get('/', async (req, res) => {
  Stats.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
});


module.exports = Router;
