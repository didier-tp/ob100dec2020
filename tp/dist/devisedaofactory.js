"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviseDaoFactory = void 0;
var devisedaocsv_1 = require("./devisedaocsv");
var devisedaojson_1 = require("./devisedaojson");
var DeviseDaoFactory = /** @class */ (function () {
    //constructeur exceptionnellement privé avec Singleton
    //pour interdir le new direct et forcer à passer par getInstance()
    function DeviseDaoFactory() {
    }
    DeviseDaoFactory.getInstance = function () {
        if (DeviseDaoFactory.uniqueInstance == null) {
            DeviseDaoFactory.uniqueInstance = new DeviseDaoFactory();
        }
        return DeviseDaoFactory.uniqueInstance;
    };
    DeviseDaoFactory.prototype.createDao = function () {
        var versionDao = "json"; //ou bien "csv" 
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
