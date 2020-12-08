"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFile = void 0;
var fs = __importStar(require("fs"));
//npm install -s @types/node
//classe utilitaire pour lire ou ecrire un fichier
var MyFile = /** @class */ (function () {
    function MyFile(fileName) {
        if (fileName === void 0) { fileName = "data.txt"; }
        this.fileName = fileName;
    }
    MyFile.prototype.writeAllDataInFile = function (data) {
        fs.writeFile(this.fileName, data, function (err) {
            if (err)
                console.error(err);
            else
                console.log("data  written in file");
        });
    };
    MyFile.prototype.readAllDataInFile = function (callbackWithErrAndData) {
        fs.readFile(this.fileName, callbackWithErrAndData);
    };
    return MyFile;
}());
exports.MyFile = MyFile;
