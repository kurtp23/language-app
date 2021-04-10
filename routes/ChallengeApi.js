const Router = require("express").Router();
const Challenge = require("../models/Challenge.js");

Router.get("/api/challenges", async (req, res) => {
    console.log("GET request for CHALLENGE")
    Challenge.find({})
    .then((data) => {
        console.log("Sending CHALLENGES")
      res.json(data);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
});

module.exports = Router;
