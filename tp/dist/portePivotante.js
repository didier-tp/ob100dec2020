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
exports.PortePivotante = void 0;
var porte_1 = require("./porte");
var PortePivotante = /** @class */ (function (_super) {
    __extends(PortePivotante, _super);
    function PortePivotante(pcouleur) {
        if (pcouleur === void 0) { pcouleur = "white"; }
        var _this = _super.call(this, pcouleur) || this;
        _this.angleOuverture = 0; //0 dégré , porte initialement fermée
        return _this;
    }
    /*private*/ PortePivotante.prototype.fairePivoter = function (angle) {
        this.angleOuverture = angle;
        console.log("nouvel angleOuverture=" + this.angleOuverture);
    };
    PortePivotante.prototype.ouvrir = function () {
        this.fairePivoter(90); //90° pour porte bien ouverte
    };
    PortePivotante.prototype.fermer = function () {
        this.fairePivoter(0); //0° pour porte bien fermée
    };
    return PortePivotante;
}(porte_1.Porte));
exports.PortePivotante = PortePivotante;
