const mongoose = require('mongoose');

// Connexion à la base de données MongoDB avec Mongoose
mongoose.connect(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongodb:27017/${process.env.MONGO_INITDB_DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connecté à MongoDB');

    // Modèle de données pour la collection "cities"
    const City = mongoose.model('City', {
        name: String,
        country: String
    });

    // Données à insérer
    const citiesData = [
        { name: 'Paris', country: 'France' },
        { name: 'New York', country: 'USA' },
        { name: 'Tokyo', country: 'Japan' },
        { name: 'London', country: 'UK' },
        { name: 'Sydney', country: 'Australia' }
    ];

    // Insérez les données dans la collection en utilisant le modèle
    City.insertMany(citiesData)
        .then(result => {
            console.log(`${result.length} villes insérées avec succès`);
        })
        .catch(err => {
            console.error('Erreur lors de l\'insertion des villes', err);
        })
        .finally(() => {
            // Fermez la connexion à MongoDB
            mongoose.connection.close();
        });
}).catch(err => {
    console.error(err);
});
