const Router = require("express").Router();
const { Flashcard } = require("../models");

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