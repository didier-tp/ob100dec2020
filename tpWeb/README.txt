le fichier package.json de la techologie npm
comporte des dépendances sur la technologie "webpack"
----------
il faut lancer au moins une fois les commandes suivantes:
----------
npm install -g webpack
npm install

=======================
pour lancer la construction complète de dist/js/fig-bundle.js
il faut lancer tsc suivi de webpack
ceci est codé dans le script "build" de package.json

lancement de la construction:
npm run build
