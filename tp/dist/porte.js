"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Porte = void 0;
var Porte = /** @class */ (function () {
    function Porte(couleur) {
        if (couleur === void 0) { couleur = "black"; }
        this.couleur = couleur;
    }
    Porte.prototype.ouvrir = function () { }; //code qui sera redéfini dans sous classes
    Porte.prototype.fermer = function () { }; //code qui sera redéfini dans sous classes
    return Porte;
}());
exports.Porte = Porte;
