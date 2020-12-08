"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresse = void 0;
var Adresse = /** @class */ (function () {
    function Adresse(num, rue, cp, ville) {
        if (num === void 0) { num = "0"; }
        if (rue === void 0) { rue = "?"; }
        if (cp === void 0) { cp = "?"; }
        if (ville === void 0) { ville = "?"; }
        this.num = num;
        this.rue = rue;
        this.codePostal = cp;
        this.ville = ville;
    }
    return Adresse;
}());
exports.Adresse = Adresse;
