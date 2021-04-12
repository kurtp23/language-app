var mongoose = require("mongoose");
var db = require("../models/");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/learningapp", {
  useNewUrlParser: true,
});

var challengeSeed = [
  {
    names: [
      {cat: 'Zoo Animals', key: 'zooAnimals', description: 'Exotic, Interesting Critters!'}, 
      {cat:'Farm Animals', key:'farmAnimals', description: 'Animals with Jobs!'}, 
      {cat:'Places', key:'places', description: 'Locations and Spaces!'}, 
      {cat:'Fruits and Veggies', key:'fruitsVegetables', description: 'The Freshest Things You Eat!'}
    ],
    data: {
        zooAnimals: [
          {eng: 'Polar Bear', spa: 'Oso Polar'},
          {eng: 'Cheetah', spa: 'Leopardo'},
          {eng: 'Monkey', spa: 'Mona'},
          {eng: 'Giraffe', spa: 'Jirafa'},
          {eng: 'Eagle', spa: 'Águila'},
          {eng: 'Tiger', spa: 'Tigre'},
          {eng: 'Lion', spa: 'León'},
          {eng: 'Penguin', spa: 'Pingüino'},
          {eng: 'Crocodile', spa: 'Cocodrilo'},
          {eng: 'Elephant', spa: 'Elefante'},
          {eng: 'Flamingo', spa: 'Flamenco'},
          {eng: 'Snake', spa: 'Serpiente'},
          {eng: 'Fox', spa: 'Zorro'},
          {eng: 'Butterfly', spa: 'Marioposa'},
          {eng: 'Sea Lion', spa: 'León Marino'},
          {eng: 'Crab', spa: 'Cangrejo'},
          {eng: 'Iguana', spa: 'Iguana'},
          {eng: 'Turtle', spa: 'Tortuga'},
          {eng: 'Koala', spa: 'Oso Koala'},
          {eng: 'Rhino', spa: 'Rinoceronte'},
          {eng: 'Hippo', spa: 'Hipopótamo'},
          {eng: 'Gorrila', spa: 'Gorila'},
          {eng: 'Zebra', spa: 'Cebra'},
        ],
        farmAnimals: [
          {eng: 'Cow', spa: 'Vaca'},
          {eng: 'Pig', spa: 'Cerdo'}, 
          {eng: 'Goat', spa: 'Cabra'}, 
          {eng: 'Alpaca', spa: 'Alpaca'}, 
          {eng: 'Dog', spa: 'Perro'}, 
          {eng: 'Cat', spa: 'Gato'}, 
          {eng: 'Rooster', spa: 'Gallo'}, 
          {eng: 'Hen', spa: 'Gallina'}, 
          {eng: 'Duck', spa: 'Pato'}, 
          {eng: 'Sheep', spa: 'Oveja'}, 
          {eng: 'Horse', spa: 'Caballo'}, 
          {eng: 'Donkey', spa: 'Burro'}, 
          {eng: 'Goose', spa: 'Ganso'}, 
          {eng: 'Swan', spa: 'Cisne'}, 
          {eng: 'Pony', spa: 'Poni'}, 
          {eng: 'Turkey', spa: 'Pavo'}, 
          {eng: 'Rabbit', spa: 'Conejo'}, 
          {eng: 'Llama', spa: 'Llama'}, 
          {eng: 'Bee', spa: 'Abeja'}, 
          {eng: 'Owl', spa: 'Búho'}, 
          {eng: 'Mouse', spa: 'Ratón'},
        ],
        places: [
         {eng: 'Ocean', spa: 'Oceano'}, 
         {eng: 'Lake', spa: 'Lago'}, 
         {eng: 'Pond', spa: 'Estanque'}, 
         {eng: 'Desert', spa: 'Desierta'}, 
         {eng: 'Forest', spa: 'Bosque'}, 
         {eng: 'Mountain', spa: 'Montaña'}, 
         {eng: 'Hills', spa: 'Sierras'}, 
         {eng: 'Island', spa: 'Isla'}, 
         {eng: 'Volcano', spa: 'Volcán'}, 
         {eng: 'Canyon', spa: 'Cañón'}, 
         {eng: 'River', spa: 'Rio'}, 
         {eng: 'Beach', spa: 'Playa'}, 
         {eng: 'House', spa: 'Casa'}, 
         {eng: 'City', spa: 'Cuidad'}, 
         {eng: 'Playground', spa: 'Patio de Recreo'}, 
         {eng: 'Park', spa: 'Parque'}, 
         {eng: 'School', spa: 'Colegio'}, 
         {eng: 'Market', spa: 'Mercado'}, 
         {eng: 'Bank', spa: 'Banco'}, 
         {eng: 'Hospital', spa: 'Hospital'}, 
         {eng: 'Street', spa: 'Calle'}, 
         {eng: 'Library', spa: 'Biblioteca'},
        ],
        fruitsVegetables: [
         {eng: 'Apple', spa: 'Manzana'},
         {eng: 'Banana', spa: 'Banana'},
         {eng: 'Cherry', spa: 'Cereza'},
         {eng: 'Avocado', spa: 'Aguacate'},
         {eng: 'Watermelon', spa: 'Sandía'},
         {eng: 'Blueberry', spa: 'Arándano'},
         {eng: 'Raspberry', spa: 'Frambuesa'},
         {eng: 'Blackberry', spa: 'Mora'},
         {eng: 'Tomato', spa: 'Tomate'},
         {eng: 'Zuccini', spa: 'Zapallitos'},
         {eng: 'Pepper', spa: 'Pimienta'},
         {eng: 'Turnip', spa: 'Nabo'},
         {eng: 'Parsnip', spa: 'Chirivía'},
         {eng: 'Carrot', spa: 'Zanahoria'},
         {eng: 'Spinach', spa: 'Espinacas'},
         {eng: 'Celery', spa: 'Apio'},
         {eng: 'Onion', spa: 'Cebolla'},
         {eng: 'Garlic', spa: 'Ajo'},
         {eng: 'Lemon', spa: 'Limón'},
         {eng: 'Orange', spa: 'Naranja'},
         {eng: 'Mushroom', spa: 'Hongo'},
        ]
    }
}
];

db.Challenge.deleteMany({})
  .then(
    db.Challenge.collection.insertMany(challengeSeed).then((data) => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
