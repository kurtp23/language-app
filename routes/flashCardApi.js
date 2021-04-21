const Router = require('express').Router();
const { Flashcard } = require('../models');

Router.get('/', async (req, res) => {
  console.log('getting flashcards...');
  Flashcard.find({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = Router;
