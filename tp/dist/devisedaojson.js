"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviseDaoJson = void 0;
var myFile_1 = require("./myFile");
var DeviseDaoJson = /** @class */ (function () {
    function DeviseDaoJson() {
    }
    DeviseDaoJson.prototype.saveListDevises = function (tabDevises) {
        //pré-version simplifiée:
        //console.log(JSON.stringify(tabDevises));
        var myCsvFile = new myFile_1.MyFile("devises.json");
        myCsvFile.writeAllDataInFile(JSON.stringify(tabDevises));
    };
    DeviseDaoJson.prototype.loadListDevise = function () {
        throw new Error("Method not implemented.");
    };
    return DeviseDaoJson;
}());
exports.DeviseDaoJson = DeviseDaoJson;
