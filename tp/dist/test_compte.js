"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compte_1 = require("./compte");
var c1; //c1 est une référence
c1 = new compte_1.Compte(); // création d'une nouvelle instance
//c1._solde = 300; //de l'extérieur de la classe, 
//l'accès direct interdit aux éléments privés 
console.log("decouvert autorise:" + compte_1.Compte.decouvertAutorise);
var tauxInteretDecouvPct = compte_1.Compte.tauxInteretDecouvertEnPourcentage();
console.log("en % , le taux d'intéret sur le découvert est de "
    + tauxInteretDecouvPct);
console.log("racine carree de 9 = " + Math.sqrt(9.0));
console.log("PI=" + Math.PI);
console.log("solde de c1=" + c1.solde);
try {
    c1.solde = -200; //appel interne à set solde(-200)
    console.log("solde de c1=" + c1.solde);
}
catch (ex) {
    console.log("erreur/exception:" + ex);
}
try {
    c1.solde = -400; //appel interne à set solde(-400)
    console.log("solde de c1=" + c1.solde);
}
catch (ex) {
    console.log("erreur/exception (c1):" + ex);
}
compte_1.Compte.decouvertAutorise = -600;
console.log("nouveau decouvert autorise:" + compte_1.Compte.decouvertAutorise);
try {
    c1.solde = -400; //appel interne à set solde(-400)
    console.log("solde de c1=" + c1.solde);
}
catch (ex) {
    console.log("erreur/exception:" + ex);
}
c1.solde = 300; //appel interne à set solde(300)
console.log("solde de c1=" + c1.solde);
c1.numero = 1;
c1.label = "compte_courant";
// JSON.stringify() est une fonction prédéfinie du langage
// javascript qui génère une chaine de caractère au format JSON
// avec toutes les valeurs énumérables de l'objet javascript
console.log("c1=" + JSON.stringify(c1));
c1.debiter(50);
console.log("apres avoir débiter 50 euros, c1=" + JSON.stringify(c1));
c1.crediter(100);
console.log("apres avoir créditer 100 euros, c1=" + JSON.stringify(c1));
compte_1.Compte.decouvertAutorise = -250;
//Compte.decouvertAutorise = -550;
console.log("nouveau decouvert autorise:" + compte_1.Compte.decouvertAutorise);
var c2 = new compte_1.Compte();
c2.numero = 2;
console.log("solde de c2=" + c2.solde); //appel interne à get solde()
//Compte.decouvertAutorise = -250;
//console.log("nouveau decouvert autorise:" + Compte.decouvertAutorise);
try {
    c2.solde = -400; //appel interne à set solde(-400)
    console.log("nouveau solde de c2=" + c2.solde);
}
catch (ex) {
    console.log("erreur/exception (c2):" + ex);
}
var c3 = new compte_1.Compte(3, "compte3", 1000.0);
c3.crediter(500);
console.log("c3=" + JSON.stringify(c3));
