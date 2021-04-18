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
          {eng: 'Polar Bear', spa: 'Oso Polar', fre: 'Ours Polaire',},
          {eng: 'Cheetah', spa: 'Leopardo', fre: 'Guépard',},
          {eng: 'Monkey', spa: 'Mona', fre: 'Singe',},
          {eng: 'Giraffe', spa: 'Jirafa', fre: 'Girafe',},
          {eng: 'Eagle', spa: 'Águila', fre: 'Aigle',},
          {eng: 'Tiger', spa: 'Tigre', fre: 'Tigre',},
          {eng: 'Lion', spa: 'León', fre: 'Lionne',},
          {eng: 'Penguin', spa: 'Pingüino', fre: 'Pingouin',},
          {eng: 'Crocodile', spa: 'Cocodrilo', fre: 'Crocodile',},
          {eng: 'Elephant', spa: 'Elefante', fre: 'Eléphant',},
          {eng: 'Flamingo', spa: 'Flamenco', fre: 'Flamant',},
          {eng: 'Snake', spa: 'Serpiente', fre: 'Serpent',},
          {eng: 'Fox', spa: 'Zorro', fre: 'Renarde',},
          {eng: 'Butterfly', spa: 'Marioposa', fre: 'Papillon',},
          {eng: 'Sea Lion', spa: 'León Marino', fre: 'Lion de Mer',},
          {eng: 'Crab', spa: 'Cangrejo', fre: 'Crabe',},
          {eng: 'Iguana', spa: 'Iguana', fre: 'Iguane',},
          {eng: 'Turtle', spa: 'Tortuga', fre: 'Tortue',},
          {eng: 'Koala', spa: 'Oso Koala', fre: 'Koala',},
          {eng: 'Rhino', spa: 'Rinoceronte', fre: 'Rhinocéros',},
          {eng: 'Hippo', spa: 'Hipopótamo', fre: 'Hippopotame',},
          {eng: 'Gorrila', spa: 'Gorila', fre: 'Gorille',},
          {eng: 'Zebra', spa: 'Cebra', fre: 'Zèbre',},
        ],
        farmAnimals: [
          {eng: 'Cow', spa: 'Vaca', fre: 'Vache',},
          {eng: 'Pig', spa: 'Cerdo', fre: 'Cochon',}, 
          {eng: 'Goat', spa: 'Cabra', fre: 'Chèvre',}, 
          {eng: 'Alpaca', spa: 'Alpaca', fre: 'Alpaga',}, 
          {eng: 'Dog', spa: 'Perro', fre: 'Chien',}, 
          {eng: 'Cat', spa: 'Gato', fre: 'Chat',}, 
          {eng: 'Rooster', spa: 'Gallo', fre: 'Coq',}, 
          {eng: 'Hen', spa: 'Gallina', fre: 'Poule',}, 
          {eng: 'Duck', spa: 'Pato', fre: 'Canard',}, 
          {eng: 'Sheep', spa: 'Oveja', fre: 'Mouton',}, 
          {eng: 'Horse', spa: 'Caballo', fre: 'Cheval',}, 
          {eng: 'Donkey', spa: 'Burro', fre: 'Ânesse',}, 
          {eng: 'Goose', spa: 'Ganso', fre: 'Oie',}, 
          {eng: 'Swan', spa: 'Cisne', fre: 'Cygne',}, 
          {eng: 'Pony', spa: 'Poni', fre: 'Poney',}, 
          {eng: 'Turkey', spa: 'Pavo', fre: 'Dinde',}, 
          {eng: 'Rabbit', spa: 'Conejo', fre: 'Lapin',}, 
          {eng: 'Llama', spa: 'Llama', fre: 'Lama',}, 
          {eng: 'Bee', spa: 'Abeja', fre: 'Abeille',}, 
          {eng: 'Owl', spa: 'Búho', fre: 'Hibou',}, 
          {eng: 'Mouse', spa: 'Ratón', fre: 'Souris',},
        ],
        places: [
         {eng: 'Ocean', spa: 'Oceano', fre: 'Océan',}, 
         {eng: 'Lake', spa: 'Lago', fre: 'Lac',}, 
         {eng: 'Pond', spa: 'Estanque', fre: 'Étang',}, 
         {eng: 'Desert', spa: 'Desierta', fre: 'Désert',}, 
         {eng: 'Forest', spa: 'Bosque', fre: 'Forêt',}, 
         {eng: 'Mountain', spa: 'Montaña', fre: 'Montagne',}, 
         {eng: 'Hills', spa: 'Sierras', fre: 'Collines',}, 
         {eng: 'Island', spa: 'Isla', fre: 'île',}, 
         {eng: 'Volcano', spa: 'Volcán', fre: 'Volcan',}, 
         {eng: 'Canyon', spa: 'Cañón', fre: 'Canyon',}, 
         {eng: 'River', spa: 'Rio', fre: 'Fleuve',}, 
         {eng: 'Beach', spa: 'Playa', fre: 'Plage',}, 
         {eng: 'House', spa: 'Casa', fre: 'Maison',}, 
         {eng: 'City', spa: 'Cuidad', fre: 'Ville',}, 
         {eng: 'Playground', spa: 'Patio de Recreo', fre: 'Cour de Récréation',}, 
         {eng: 'Park', spa: 'Parque', fre: 'Parc',}, 
         {eng: 'School', spa: 'Colegio', fre: 'École',}, 
         {eng: 'Market', spa: 'Mercado', fre: 'Marché',}, 
         {eng: 'Bank', spa: 'Banco', fre: 'Banque',}, 
         {eng: 'Hospital', spa: 'Hospital', fre: 'Hôpital',}, 
         {eng: 'Street', spa: 'Calle', fre: 'Rue',}, 
         {eng: 'Library', spa: 'Biblioteca', fre: 'Bibliothèque',},
        ],
        fruitsVegetables: [
         {eng: 'Apple', spa: 'Manzana', fre: 'Pommes',},
         {eng: 'Banana', spa: 'Banana', fre: 'Banane',},
         {eng: 'Cherry', spa: 'Cereza', fre: 'Cerise',},
         {eng: 'Avocado', spa: 'Aguacate', fre: 'Avocate',},
         {eng: 'Watermelon', spa: 'Sandía', fre: 'Pastèque',},
         {eng: 'Blueberry', spa: 'Arándano', fre: 'Myrtille',},
         {eng: 'Raspberry', spa: 'Frambuesa', fre: 'Framboise',},
         {eng: 'Blackberry', spa: 'Mora', fre: 'La Mûre',},
         {eng: 'Tomato', spa: 'Tomate', fre: 'Tomate',},
         {eng: 'Zuccini', spa: 'Zapallitos', fre: 'Courgette',},
         {eng: 'Pepper', spa: 'Pimienta', fre: 'Poivre',},
         {eng: 'Turnip', spa: 'Nabo', fre: 'Navet',},
         {eng: 'Parsnip', spa: 'Chirivía', fre: 'Panais',},
         {eng: 'Carrot', spa: 'Zanahoria', fre: 'Carotte',},
         {eng: 'Spinach', spa: 'Espinacas', fre: 'Épinard',},
         {eng: 'Celery', spa: 'Apio', fre: 'Céleri',},
         {eng: 'Onion', spa: 'Cebolla', fre: 'Oignon',},
         {eng: 'Garlic', spa: 'Ajo', fre: 'Ail',},
         {eng: 'Lemon', spa: 'Limón', fre: 'Citron',},
         {eng: 'Orange', spa: 'Naranja', fre: 'Orange',},
         {eng: 'Mushroom', spa: 'Hongo', fre: 'Champignon',},
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
