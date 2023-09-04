# Projet Docker

Ce projet est une application MERN (MongoDB, Express, React, Node.js) configurée pour fonctionner avec Docker. Il vous permet de développer et de déployer facilement une application web complète avec des conteneurs Docker.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé Docker sur votre système. Vous pouvez télécharger Docker depuis [le site officiel de Docker](https://www.docker.com/get-started).

## Installation

1. Clonez ce dépôt sur votre machine locale :

   ```bash
   git clone https://github.com/elton-dy/docker-confirmed.git
    
2. Utilisez Docker Compose pour construire et exécuter les conteneurs :

   ```bash
   docker-compose up

3. Une fois les conteneurs prêts, vous pouvez accéder à votre application client React à l'adresse http://localhost:3000, et votre serveur Node.js à l'adresse http://localhost:8080.

## Installation

Le client React est configuré pour utiliser l'URL de l'API du serveur à l'aide de la variable d'environnement REACT_APP_API_URL. Vous pouvez personnaliser cette URL dans le fichier docker-compose.yml.

Le serveur Node.js est configuré pour utiliser une base de données MongoDB avec l'URL spécifiée dans la variable d'environnement MONGODB_URI

## Licence

Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus de détails.



