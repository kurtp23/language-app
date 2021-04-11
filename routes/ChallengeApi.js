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

Router.get("/api/challenge/:category", async (req, res) => {
  console.log("GET request for CHALLENGE name: ", req.params.category)
  Challenge.find({})
  .then((data) => {
      // find the category key
      const key = (data[0].names.find(o => o.cat === req.params.category)).key;
      
      // get the data array
      const dataArr = data[0].data[key]
      
    res.status(200).json(dataArr);
  })
  .catch((err) => {
    res.status(200).json(err);
  });
});

module.exports = Router;
