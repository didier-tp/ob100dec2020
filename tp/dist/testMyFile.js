"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var devise_1 = require("./devise");
var myCsvUtil_1 = require("./myCsvUtil");
var myFile_1 = require("./myFile");
var myFile = new myFile_1.MyFile("f1.txt");
myFile.writeAllDataInFile("un deux trois");
var gererDonneeslues = function (err, data) {
    if (err) {
        console.log("erreur:" + err);
    }
    else {
        console.log("data: " + data);
    }
};
myFile.readAllDataInFile(gererDonneeslues);
var myCsvFile = new myFile_1.MyFile("f1.csv");
var objDevise1 = new devise_1.Devise('EUR', 'Euro', 1);
var objDevise2 = new devise_1.Devise('USD', 'Dollar', 1.1);
var objDevise3 = new devise_1.Devise('GBP', 'Livre', 0.9);
var tabDevises = [objDevise1, objDevise2, objDevise3];
var cvsFileContent = myCsvUtil_1.MyCsvUtil.csvContent(tabDevises);
myCsvFile.writeAllDataInFile(cvsFileContent);
