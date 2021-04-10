const Router = require("express").Router();
const User = require("../models/User");

// Router.get("/:id", async (req, res) => {
//     try {
//         console.log("we are getting to get all notes");
//         const User = await User.find({id: req.id});
//         res.json(User);
//     } catch (err) {
//         res.status(501);
//         console.log("error in the user get route: ", err);
//         res.send("unexpected server error when getting user!");
//     }
// });

Router.post("/api/userAdd", async (req, res) => {
  const user = new User(body);
  User.create(user)
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = Router;
