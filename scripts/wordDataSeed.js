var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/learningapp", {
  useNewUrlParser: true,
});

var WordDataSeed = [
  {
    names: [
      { cat: "Zoo Animals", key: "zooAnimals", description: "Exotic, Interesting Critters!" },
      { cat: "Farm Animals", key: "farmAnimals", description: "Animals with Jobs!" },
      { cat: "Places", key: "places", description: "Locations and Spaces!" },
      {
        cat: "Fruits and Veggies",
        key: "fruitsVegetables",
        description: "The Freshest Things You Eat!",
      },
    ],
    greetings: [
      { eng: "Welcome!", es: "¡Bienvenidas!", fr: "Bienvenue!" },
      { eng: "Good Job!", es: "¡Buen Trabajo!", fr: "Bon Travail!" },
      { eng: "Goodbye!", es: "¡Adiós!", fr: "Au Revoir!" },
    ],
    data: {
      zooAnimals: [
        { eng: "Polar Bear", es: "Oso Polar", fr: "Ours Polaire" },
        { eng: "Cheetah", es: "Leopardo", fr: "Guépard" },
        { eng: "Monkey", es: "Mona", fr: "Singe" },
        { eng: "Giraffe", es: "Jirafa", fr: "Girafe" },
        { eng: "Eagle", es: "Águila", fr: "Aigle" },
        { eng: "Tiger", es: "Tigre", fr: "Tigre" },
        { eng: "Lion", es: "León", fr: "Lionne" },
        { eng: "Penguin", es: "Pingüino", fr: "Pingouin" },
        { eng: "Crocodile", es: "Cocodrilo", fr: "Crocodile" },
        { eng: "Elephant", es: "Elefante", fr: "Eléphant" },
        { eng: "Flamingo", es: "Flamenco", fr: "Flamant" },
        { eng: "Snake", es: "Serpiente", fr: "Serpent" },
        { eng: "Fox", es: "Zorro", fr: "Renarde" },
        { eng: "Butterfly", es: "Marioposa", fr: "Papillon" },
        { eng: "Sea Lion", es: "León Marino", fr: "Lion de Mer" },
        { eng: "Crab", es: "Cangrejo", fr: "Crabe" },
        { eng: "Iguana", es: "Iguana", fr: "Iguane" },
        { eng: "Turtle", es: "Tortuga", fr: "Tortue" },
        { eng: "Koala", es: "Oso Koala", fr: "Koala" },
        { eng: "Rhino", es: "Rinoceronte", fr: "Rhinocéros" },
        { eng: "Hippo", es: "Hipopótamo", fr: "Hippopotame" },
        { eng: "Gorrila", es: "Gorila", fr: "Gorille" },
        { eng: "Zebra", es: "Cebra", fr: "Zèbre" },
      ],
      farmAnimals: [
        { eng: "Cow", es: "Vaca", fr: "Vache" },
        { eng: "Pig", es: "Cerdo", fr: "Cochon" },
        { eng: "Goat", es: "Cabra", fr: "Chèvre" },
        { eng: "Alpaca", es: "Alpaca", fr: "Alpaga" },
        { eng: "Dog", es: "Perro", fr: "Chien" },
        { eng: "Cat", es: "Gato", fr: "Chat" },
        { eng: "Rooster", es: "Gallo", fr: "Coq" },
        { eng: "Hen", es: "Gallina", fr: "Poule" },
        { eng: "Duck", es: "Pato", fr: "Canard" },
        { eng: "Sheep", es: "Oveja", fr: "Mouton" },
        { eng: "Horse", es: "Caballo", fr: "Cheval" },
        { eng: "Donkey", es: "Burro", fr: "Ânesse" },
        { eng: "Goose", es: "Ganso", fr: "Oie" },
        { eng: "Swan", es: "Cisne", fr: "Cygne" },
        { eng: "Pony", es: "Poni", fr: "Poney" },
        { eng: "Turkey", es: "Pavo", fr: "Dinde" },
        { eng: "Rabbit", es: "Conejo", fr: "Lapin" },
        { eng: "Llama", es: "Llama", fr: "Lama" },
        { eng: "Bee", es: "Abeja", fr: "Abeille" },
        { eng: "Owl", es: "Búho", fr: "Hibou" },
        { eng: "Mouse", es: "Ratón", fr: "Souris" },
      ],
      places: [
        { eng: "Ocean", es: "Oceano", fr: "Océan" },
        { eng: "Lake", es: "Lago", fr: "Lac" },
        { eng: "Pond", es: "Estanque", fr: "Étang" },
        { eng: "Desert", es: "Desierta", fr: "Désert" },
        { eng: "Forest", es: "Bosque", fr: "Forêt" },
        { eng: "Mountain", es: "Montaña", fr: "Montagne" },
        { eng: "Hills", es: "Sierras", fr: "Collines" },
        { eng: "Island", es: "Isla", fr: "île" },
        { eng: "Volcano", es: "Volcán", fr: "Volcan" },
        { eng: "Canyon", es: "Cañón", fr: "Canyon" },
        { eng: "River", es: "Rio", fr: "Fleuve" },
        { eng: "Beach", es: "Playa", fr: "Plage" },
        { eng: "House", es: "Casa", fr: "Maison" },
        { eng: "City", es: "Cuidad", fr: "Ville" },
        { eng: "Playground", es: "Patio de Recreo", fr: "Cour de Récréation" },
        { eng: "Park", es: "Parque", fr: "Parc" },
        { eng: "School", es: "Colegio", fr: "École" },
        { eng: "Market", es: "Mercado", fr: "Marché" },
        { eng: "Bank", es: "Banco", fr: "Banque" },
        { eng: "Hospital", es: "Hospital", fr: "Hôpital" },
        { eng: "Street", es: "Calle", fr: "Rue" },
        { eng: "Library", es: "Biblioteca", fr: "Bibliothèque" },
      ],
      fruitsVegetables: [
        { eng: "Apple", es: "Manzana", fr: "Pommes" },
        { eng: "Banana", es: "Banana", fr: "Banane" },
        { eng: "Cherry", es: "Cereza", fr: "Cerise" },
        { eng: "Avocado", es: "Aguacate", fr: "Avocate" },
        { eng: "Watermelon", es: "Sandía", fr: "Pastèque" },
        { eng: "Blueberry", es: "Arándano", fr: "Myrtille" },
        { eng: "Raspberry", es: "Frambuesa", fr: "Framboise" },
        { eng: "Blackberry", es: "Mora", fr: "La Mûre" },
        { eng: "Tomato", es: "Tomate", fr: "Tomate" },
        { eng: "Zuccini", es: "Zapallitos", fr: "Courgette" },
        { eng: "Pepper", es: "Pimienta", fr: "Poivre" },
        { eng: "Turnip", es: "Nabo", fr: "Navet" },
        { eng: "Parsnip", es: "Chirivía", fr: "Panais" },
        { eng: "Carrot", es: "Zanahoria", fr: "Carotte" },
        { eng: "Spinach", es: "Espinacas", fr: "Épinard" },
        { eng: "Celery", es: "Apio", fr: "Céleri" },
        { eng: "Onion", es: "Cebolla", fr: "Oignon" },
        { eng: "Garlic", es: "Ajo", fr: "Ail" },
        { eng: "Lemon", es: "Limón", fr: "Citron" },
        { eng: "Orange", es: "Naranja", fr: "Orange" },
        { eng: "Mushroom", es: "Hongo", fr: "Champignon" },
      ],
    },
  },
];

// db.WordData.deleteMany({})
//   .then(
//     db.WordData.collection.insertMany(WordDataSeed).then((data) => {
//       console.log(data.result.n + " records inserted!");
//       process.exit(0);
//     })
//   )
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

module.exports = WordDataSeed;
