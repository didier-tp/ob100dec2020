"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var porteCoulissante_1 = require("./porteCoulissante");
var portePivotante_1 = require("./portePivotante");
var p; //p = référence sur Porte quelconque
var pp = new portePivotante_1.PortePivotante("blue");
var pc = new porteCoulissante_1.PorteCoulissante("red");
p = pp;
p.ouvrir(); //appelera fairePivoter() - POLYMORPHISME
p.fermer();
p = pc;
p.ouvrir(); //appelera faireGlisser() - POLYMORPHISME
p.fermer();
