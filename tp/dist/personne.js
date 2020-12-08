"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(nom, prenom) {
        if (nom === void 0) { nom = "?"; }
        if (prenom === void 0) { prenom = "?"; }
        this.nom = nom;
        this.prenom = prenom;
        this.adressePrincipale = null; //adresse pas encore connue/renseignée
    }
    Personne.prototype.nomComplet = function () {
        return this.prenom + " " + this.nom;
    };
    Personne.prototype.afficher = function () {
        console.log(this.nomComplet()
            + ",adresse=" + JSON.stringify(this.adressePrincipale));
    };
    return Personne;
}());
exports.Personne = Personne;
