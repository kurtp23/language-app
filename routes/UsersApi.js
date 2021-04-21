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




Router.put("/api/users/:userid", async (req, res) => {
  console.log("PUT for new Stat: ", req.params.userid, " and ", req.body)

  User.findOne({ fire_id: req.params.userid })
  .then((data) => {
    console.log("Found User", data)
    // now inject new book data
    const newStatsArray = [...data.stats, req.body]

    User.updateOne({ fire_id: req.params.userid }, {
      stats: newStatsArray
    })
    .then((data) => {
      // final
      res.status(200).json(data)
    })
    .catch((err) => {
      console.log("error in put stats request ", err)
      res.status(500).json(err)
    });
  })
})


module.exports = Router;
