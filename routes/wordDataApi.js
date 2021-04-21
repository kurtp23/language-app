const Router = require("express").Router();
const WordData = require("../models/wordData.js");

Router.get("/api/worddata", async (req, res) => {
    console.log("GET request for word data")

    WordData.find({})
    .then((data) => {
        console.log("Sending word data", data)
      res.json(data);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
});

Router.get("/api/worddata/:category", async (req, res) => {
  console.log("GET request for word data category: ", req.params.category)
  WordData.find({})
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
