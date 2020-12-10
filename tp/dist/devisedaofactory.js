"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviseDaoFactory = void 0;
var devisedaocsv_1 = require("./devisedaocsv");
var devisedaojson_1 = require("./devisedaojson");
var DeviseDaoFactory = /** @class */ (function () {
    function DeviseDaoFactory() {
    }
    DeviseDaoFactory.getInstance = function () {
        if (DeviseDaoFactory.uniqueInstance == null) {
            DeviseDaoFactory.uniqueInstance = new DeviseDaoFactory();
        }
        return DeviseDaoFactory.uniqueInstance;
    };
    DeviseDaoFactory.prototype.createDao = function () {
        var versionDao = "csv"; //ou bien "json" 
        //(éventuellement selon fichier de config)
        var deviseDao;
        if (versionDao == "csv")
            deviseDao = new devisedaocsv_1.DeviseDaoCsv();
        else if (versionDao == "json")
            deviseDao = new devisedaojson_1.DeviseDaoJson();
        return deviseDao;
    };
    DeviseDaoFactory.uniqueInstance = null;
    return DeviseDaoFactory;
}());
exports.DeviseDaoFactory = DeviseDaoFactory;
