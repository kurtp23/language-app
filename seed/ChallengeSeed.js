const mongoose = require("mongoose");
const Challenge = require("../models/Challenge.js");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/learning-app"
);

const CategorySeed = {
    names: [{cat: 'Zoo Animals', key: 'zooAnimals'}, {cat:'Farm Animals', key:'farmAnimals'}, {cat:'Places', key:'places'}, {cat:'Fruits & Veggies', key:'fruitsVegetables'}],
    data: {
        zooAnimals: ['Polar Bear', 'Cheetah', 'Monkey', 'Giraffe', 'Eagle', 'Tiger', 'Lion', 'Penguin', 'Crocodile', 'Elephant', 'Flamingo', 'Snake', 'Fox', 'Butterfly', 'Sea Lion', 'Crab', 'Iguana', 'Turtle', 'Koala', 'Rhino', 'Hippo', 'Gorrila', 'Zebra'],
        farmAnimals: ['Cow', 'Pig', 'Goat', 'Alpaca', 'Dog', 'Cat', 'Rooster', 'Hen', 'Duck', 'Sheep', 'Horse', 'Donkey', 'Goose', 'Swan', 'Pony', 'Turkey', 'Rabbit', 'Llama', 'Bee', 'Owl', 'Mouse'],
        places: ['Ocean', 'Lake', 'Pond', 'Desert', 'Forest', 'Mountain', 'Hills', 'Island', 'Volcano', 'Canyon', 'River', 'Beach', 'House', 'City', 'Playground', 'Park', 'School', 'Market', 'Bank', 'Hospital', 'Street', 'Library'],
        fruitsVegetables: ['Apple', 'Banana', 'Cherry', 'Avocado', 'Watermelon', 'Blueberry', 'Raspberry', 'Blackberry', 'Tomato', 'Zuccini', 'Pepper', 'Turnip', 'Parsnip', 'Carrot', 'Spinach', 'Celery', 'Onion', 'Garlic', 'Lemon', 'Orange', 'Mushroom']
    }
}

Challenge
  .deleteMany({})
  .then(() => Challenge.collection.insertMany(CategorySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });