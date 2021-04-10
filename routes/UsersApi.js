const Router = require("express").Router();
const User = require("../models/User");

Router.post("/api/addUser", async (req, res) => {
  console.log(req.body);
  // const user = new User({
  //   username: "user3",

  //   email: "user@3",

  //   userCreated: new Date(Date.now()),
  // });
  // User.create(user)
  //   .then((dbUser) => {
  //     res.json(dbUser);
  //   })
  //   .catch((err) => {
  //     res.json(err);
  //   });
});

module.exports = Router;
