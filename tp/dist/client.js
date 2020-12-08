"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(num, nom, prenom) {
        if (num === void 0) { num = 0; }
        if (nom === void 0) { nom = "?"; }
        if (prenom === void 0) { prenom = "?"; }
        this.numero = num;
        this.nom = nom;
        this.prenom = prenom;
        this.adressePrincipale = null; //adresse pas encore connue/renseignée
        this.comptes = []; //liste vide pour commencer
    }
    Client.prototype.ajouterCompte = function (compte) {
        //compte.proprietaire = this; //si bidirectionnel
        this.comptes.push(compte); //.push() est prédéfini 
        //sur un tableau javascript pour ajouter un élément
        // souvent .add() avec d'autres langages
    };
    return Client;
}());
exports.Client = Client;
