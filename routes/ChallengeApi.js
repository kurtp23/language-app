const Router = require("express").Router();
const Challenge = require("../models/Challenge");

Router.get("/api/challenges", async (req, res) => {
    console.log("GET request for CHALLENGEs")
  Challenge.find({})
    .then((data) => {
        console.log("Sending CHALLENGES")
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = Router;
