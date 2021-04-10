const Router = require("express").Router();
const { Flashcard } = require("../models");
const User = require("../models/User");

Router.post("/api/flashCard", async (req, res) => {
    const testFlashCard = new Flashcard(body);
    Flashcard.create(testFlashCard)
      .then((fc) => {
        res.json(fc);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  module.exports = Router;