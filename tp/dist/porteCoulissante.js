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
exports.PorteCoulissante = void 0;
var porte_1 = require("./porte");
var PorteCoulissante = /** @class */ (function (_super) {
    __extends(PorteCoulissante, _super);
    function PorteCoulissante(pcouleur) {
        if (pcouleur === void 0) { pcouleur = "green"; }
        var _this = _super.call(this, pcouleur) || this;
        _this.ecartement = 0; //0 cm, porte initialement fermée
        return _this;
    }
    /*private*/ PorteCoulissante.prototype.faireCoulisser = function (ecartement) {
        this.ecartement = ecartement;
        console.log("nouvel ecartement=" + this.ecartement);
    };
    PorteCoulissante.prototype.ouvrir = function () {
        this.faireCoulisser(80); //80cm pour porte bien ouverte
    };
    PorteCoulissante.prototype.fermer = function () {
        this.faireCoulisser(0); //0cm pour porte bien fermée
    };
    return PorteCoulissante;
}(porte_1.Porte));
exports.PorteCoulissante = PorteCoulissante;
