const Router = require("express").Router();
const Challenge = require("../models/Challenge.js");

Router.get("/api/challenges", async (req, res) => {
    console.log("GET request for CHALLENGE")
    Challenge.find({})
    .then((data) => {
        console.log("Sending CHALLENGES", data)
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = Router;
