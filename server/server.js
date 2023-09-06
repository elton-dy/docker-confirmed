const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 8080;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Connexion à la base de données MongoDB au démarrage du serveur
mongoose.connect('mongodb://mongodb:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connexion à MongoDB établie');
    })
    .catch((error) => {
        console.error('Erreur de connexion à MongoDB :', error);
    });

app.get('/api/status', (req, res) => {
    // Récupérez des données de la base de données ou de l'application ici
    // const dataFromDatabase = { message: 'Données de la base de données' };

    res.json({ serverStatus: 'OK Server'});
});

app.get('/api/insert-cities', (req, res) => {
    // Ici, vous pouvez exécuter le contenu de insert-cities.js pour insérer les villes dans la base de données
    const initScript = require('./insert-cities');

    // Appel de la fonction ou de la logique pour insérer les villes
    initScript();

    // Répondez avec un message indiquant que l'insertion a été lancée
    res.json({ message: 'Insertion des villes en cours...' });
});


app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
