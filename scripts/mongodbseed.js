const MongoClient = require("mongodb").MongoClient;
const WordDataSeed = require("./wordDataSeed.js");

async function seedDB() {
  // Connection URL
  const uri =
    "mongodb+srv://PKurt23:1SuperDB!@cluster0.7xj1l.mongodb.net/learningapp?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const collection = client.db("iot").collection("worddatas");
    // The drop() command destroys all data from a collection.
    // Make sure you run it against proper database and collection.
    collection.drop();
    // make a bunch of time series data

    collection.insertMany(WordDataSeed);
    console.log("Database seeded! :)");
    client.close();
  } catch (err) {
    console.log(err.stack);
  }
}
seedDB();
