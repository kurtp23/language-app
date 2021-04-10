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

module.exports = Router;
