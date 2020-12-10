"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var devise_1 = require("./devise");
var devisedaofactory_1 = require("./devisedaofactory");
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
/* v1 (sans factory)
testDeviseDao.deviseDao= new DeviseDaoCsv();
testDeviseDao.sauvegarder();
testDeviseDao.deviseDao= new DeviseDaoJson();
testDeviseDao.sauvegarder();
*/
//V2 : via factory et singleton:
var deviseDaoFactory = devisedaofactory_1.DeviseDaoFactory.getInstance();
testDeviseDao.deviseDao = deviseDaoFactory.createDao(); //csv ou json ou ...
testDeviseDao.sauvegarder();
