const Router = require("express").Router();
const Challenge = require("../models/Challenge.js");

Router.get("/", async (req, res) => {
  console.log("GET request for CHALLENGE");
  Challenge.find({})
    .then((data) => {
      console.log("Sending CHALLENGES", data);
      res.json(data);
    })
    .catch((err) => {
      console.log("this is challenge", err);
      res.status(500).json(err);
    });
});

Router.get("/:category", async (req, res) => {
  console.log("GET request for CHALLENGE name: ", req.params.category);
  Challenge.find({})
    .then((data) => {
      // find the category key
      console.log("this is challenge router data", data);
      const key = data[0].names.find((o) => o.cat === req.params.category).key;

      // get the data array
      const dataArr = data[0].data[key];

      res.status(200).json(dataArr);
    })
    .catch((err) => {
      console.log("this is challenge category:", err);
      res.status(500).json(err);
    });
});

module.exports = Router;
