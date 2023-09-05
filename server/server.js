const express = require('express');
const app = express();
const port = 8080;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/status', (req, res) => {
    // Récupérez des données de la base de données ou de l'application ici
    // const dataFromDatabase = { message: 'Données de la base de données' };

    res.json({ serverStatus: 'OK Server'});
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
