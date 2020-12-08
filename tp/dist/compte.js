"use strict";
//import { Client } from "./client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compte = void 0;
var Compte = /** @class */ (function () {
    //constructeur = fonction interne à la classe qui sert à initialiser
    //les valeurs internes d'une instance dès sa construction 
    //(lors du new appelé de l'extérieur)
    function Compte(numero, libelle, soldeInitial) {
        if (numero === void 0) { numero = 0; }
        if (libelle === void 0) { libelle = "?"; }
        if (soldeInitial === void 0) { soldeInitial = 0.0; }
        this.numero = numero;
        this.label = libelle;
        this._solde = soldeInitial;
    }
    //une méthode static peut être directement appelée avec un prefixe NomClasse.
    Compte.tauxInteretDecouvertEnPourcentage = function () {
        return Compte.tauxInteretDecouvert * 100;
    };
    Object.defineProperty(Compte.prototype, "solde", {
        //ici valeur partagée commune
        //à toutes les instances de la classe Compte
        //-300 est ici une valeur par défaut (qui pourra changer)
        //get/set sur solde:
        get: function () {
            return this._solde;
        },
        set: function (soldeSouhaite) {
            if (soldeSouhaite >= Compte.decouvertAutorise) {
                this._solde = soldeSouhaite;
            }
            else {
                //this._solde pas modifié
                //console.log("solde inférieur au découvert autorisé invalide");
                throw "solde inférieur au découvert autorisé ["
                    + Compte.decouvertAutorise
                    + "] invalide"; //remoter une exception 
                //à rattraper par try/catch depuis l'appel extérieur
            }
        },
        enumerable: false,
        configurable: true
    });
    Compte.prototype.debiter = function (montant) {
        //this._solde = this._solde - montant;
        this.solde = this.solde - montant;
    };
    Compte.prototype.crediter = function (montant) {
        this._solde = this._solde + montant;
    };
    //public proprietaire : Client =null; // si association bi-directionnel
    Compte.tauxInteretDecouvert = 0.01; //1%
    Compte.decouvertAutorise = -300;
    return Compte;
}());
exports.Compte = Compte;
