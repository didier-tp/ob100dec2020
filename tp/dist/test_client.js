"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adresse_1 = require("./adresse");
var client_1 = require("./client");
var compte_1 = require("./compte");
var personne_1 = require("./personne");
var p1 = new personne_1.Personne("Therieur", "alain");
console.log("nomComplet de personne=" + p1.nomComplet());
p1.afficher(); //affichera nom , prenom et adresse
//********************************
var client1 = new client_1.Client(1, "Bon", "jean");
var adresse1 = new adresse_1.Adresse("4 bis", "rue elle", "59000", "Lille");
client1.adressePrincipale = adresse1;
var compte1 = new compte_1.Compte(1, "compte courant", 100.0);
client1.ajouterCompte(compte1);
client1.ajouterCompte(new compte_1.Compte(567, "livretA", 200.0));
//console.log("proprétaire:" + compte1.proprietaire.nom); //si bi_directionnel
console.log("nomComplet du client1=" + client1.nomComplet());
client1.afficher(); //affichera nom ,prenom , adr et numero
//affichages:
console.log("client1 au format json: " + JSON.stringify(client1));
console.log("prenom et nom du client1: " + client1.prenom + " " + client1.nom);
console.log("ville du client1: " + client1.adressePrincipale.ville);
console.log("comptes du client1:");
for (var i = 0; i < client1.comptes.length; i++) {
    console.log("\t solde=" + client1.comptes[i].solde);
}
//*********** 
var p; //la variable p peut référencer une personne quelconque
// (soit une instance de la classe Personne 
//  soit une instance d'une classe qui hérite de Personne)
p = p1; //p1 a été créé via new Personne()
p.afficher();
p = client1; //client a été créé via new Client 
//ET Client vue comme sorte (cas particulier) de Personne
p.afficher();
