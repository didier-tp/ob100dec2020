"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var personne_1 = require("./personne");
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(num, pnom, pprenom) {
        if (num === void 0) { num = 0; }
        if (pnom === void 0) { pnom = "?"; }
        if (pprenom === void 0) { pprenom = "?"; }
        var _this = _super.call(this, pnom, pprenom) || this;
        //au consctructeur de la classe héritée
        _this.numero = num;
        _this.comptes = []; //liste vide pour commencer
        return _this;
    }
    //redéfinition facultative de afficher() sur la classe Client
    Client.prototype.afficher = function () {
        console.log("numClient=" + this.numero); //affichage supplémentaire amélioré
        _super.prototype.afficher.call(this); //appeler la version héritée (codée sur Personne)
    };
    Client.prototype.ajouterCompte = function (compte) {
        //compte.proprietaire = this; //si bidirectionnel
        this.comptes.push(compte); //.push() est prédéfini 
        //sur un tableau javascript pour ajouter un élément
        // souvent .add() avec d'autres langages
    };
    return Client;
}(personne_1.Personne));
exports.Client = Client;
