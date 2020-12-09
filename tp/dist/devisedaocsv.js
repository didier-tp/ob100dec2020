"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviseDaoCsv = void 0;
var myCsvUtil_1 = require("./myCsvUtil");
var myFile_1 = require("./myFile");
var DeviseDaoCsv = /** @class */ (function () {
    function DeviseDaoCsv() {
    }
    DeviseDaoCsv.prototype.saveListDevises = function (tabDevises) {
        var myCsvFile = new myFile_1.MyFile("devises.csv");
        myCsvFile.writeAllDataInFile(myCsvUtil_1.MyCsvUtil.csvContent(tabDevises));
    };
    DeviseDaoCsv.prototype.loadListDevise = function () {
        throw new Error("Method not implemented.");
    };
    return DeviseDaoCsv;
}());
exports.DeviseDaoCsv = DeviseDaoCsv;
