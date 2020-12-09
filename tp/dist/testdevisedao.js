"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var devise_1 = require("./devise");
var devisedaocsv_1 = require("./devisedaocsv");
var devisedaojson_1 = require("./devisedaojson");
var TestDeviseDao = /** @class */ (function () {
    function TestDeviseDao() {
        this.tabDevises = [];
        this.tabDevises.push(new devise_1.Devise('EUR', 'euro', 1));
        this.tabDevises.push(new devise_1.Devise('USD', 'dollar', 1.1));
        this.tabDevises.push(new devise_1.Devise('GBP', 'livre', 0.9));
    }
    TestDeviseDao.prototype.sauvegarder = function () {
        this.deviseDao.saveListDevises(this.tabDevises); //polymorphisme
    };
    return TestDeviseDao;
}());
var testDeviseDao = new TestDeviseDao();
testDeviseDao.deviseDao = new devisedaocsv_1.DeviseDaoCsv();
testDeviseDao.sauvegarder();
testDeviseDao.deviseDao = new devisedaojson_1.DeviseDaoJson();
testDeviseDao.sauvegarder();
