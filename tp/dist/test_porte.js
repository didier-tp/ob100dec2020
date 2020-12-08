"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var porteCoulissante_1 = require("./porteCoulissante");
var portePivotante_1 = require("./portePivotante");
var p; //p = référence sur Porte quelconque
//p = new Porte(); //new impossible ici car Porte est une classe abstraite
var pp = new portePivotante_1.PortePivotante("blue");
var pc = new porteCoulissante_1.PorteCoulissante("red");
p = pp;
p.ouvrir(); //appelera fairePivoter() - POLYMORPHISME
p.fermer();
p = pc;
p.ouvrir(); //appelera faireGlisser() - POLYMORPHISME
p.fermer();
var tabRefPortes = [];
tabRefPortes[0] = pp;
tabRefPortes[1] = pc;
//...
for (var i = 0; i < tabRefPortes.length; i++) {
    tabRefPortes[i].ouvrir(); //POLYMORSPHISME en boucle 
}
/*
//équivalent (TRES DECONSEILLE) sans utiliser le polymorphisme:
for(let i=0;i<tabRefPortes.length;i++){
    if(tabRefPortes[i] instanceof PortePivotante)
      ( <PortePivotante>  tabRefPortes[i]).fairePivoter(90);
    else if(tabRefPortes[i] instanceof PorteCoulissante)
    ( <PorteCoulissante>  tabRefPortes[i]).faireCoulisser(80);
}
*/
