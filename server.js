const express = require("express");
const morgan = require('morgan')
const path = require("path");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3003;
const app = express();
const UsersRoutes = require('./routes/UsersApi.js');
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use('/api/users', UsersRoutes)


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/learningapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db!');
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
