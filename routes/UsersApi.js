const Router = require("express").Router();
const User = require("../models/User");

Router.post("/api/addUser", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  User.create(user)
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

Router.get("/api/:id", async (req, res) => {
  User.find({ fire_id: req.params.id })
    .then((data) => {
      console.log("this is user from db", data);
      res.json(data);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
});
module.exports = Router;
