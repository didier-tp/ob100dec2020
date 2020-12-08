"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adresse_1 = require("./adresse");
var client_1 = require("./client");
var compte_1 = require("./compte");
var client1 = new client_1.Client(1, "Bon", "jean");
var adresse1 = new adresse_1.Adresse("4 bis", "rue elle", "59000", "Lille");
client1.adressePrincipale = adresse1;
var compte1 = new compte_1.Compte(1, "compte courant", 100.0);
client1.ajouterCompte(compte1);
client1.ajouterCompte(new compte_1.Compte(567, "livretA", 200.0));
//console.log("proprétaire:" + compte1.proprietaire.nom); //si bi_directionnel
//affichages:
console.log("client1 au format json: " + JSON.stringify(client1));
console.log("prenom et nom du client1: " + client1.prenom + " " + client1.nom);
console.log("ville du client1: " + client1.adressePrincipale.ville);
console.log("comptes du client1:");
for (var i = 0; i < client1.comptes.length; i++) {
    console.log("\t solde=" + client1.comptes[i].solde);
}
