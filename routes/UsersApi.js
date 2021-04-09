const Router = require("express").Router();
const User = require("../models/User");

Router.get("/:id", async (req, res) => {
    try {
        console.log("we are getting to get all notes");
        const User = await User.find({id: req.id});
        res.json(User);
    } catch (err) {
        res.status(501);
        console.log("error in the user get route: ", err);
        res.send("unexpected server error when getting user!");
    }
});

Router.post("/", async (req, res) => {
    try {
        console.log("we got a user with: ", req.body);
        const note = await Note.create(req.body);
        res.status(201);
        res.send(note._id);
    } catch (err) {
        res.status(501);
        console.log("error in the users post route: ", err);
        res.send("unexpected server error when posting a user!");
    }
});

module.exports = Router;
