const Router = require("express").Router();
const User = require("../models/User");

Router.post("/", async (req, res) => {
  console.log("inside users post", req.body);
  const user = new User(req.body);
  User.create(user)
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

Router.get("/:id", async (req, res) => {
  User.find({ fire_id: req.params.id })
    .then((data) => {
      console.log("this is user from db", data);
      res.json(data);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
});
Router.put("/:id", async (req, res) => {
  User.findOneAndUpdate(
    { fire_id: req.params.id },
    { $set: { username: req.body.username } },
    function (err, doc) {
      if (err) {
        throw err;
      } else {
        console.log("Updated");
        res.send("ok");
      }
    }
  );
});
module.exports = Router;
