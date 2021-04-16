const Router = require("express").Router();
const Stats= require("../models/stats.js");

Router.get("/api/stats", async (req, res) => {
    console.log("get stats")
    Stats.find({})
    .then((data) => {
        console.log(data)
      res.json(data);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
});

module.exports = Router;
