import { Porte } from "./porte";
import { PorteCoulissante } from "./porteCoulissante";
import { PortePivotante } from "./portePivotante";

var p : Porte ; //p = référence sur Porte quelconque

var pp = new PortePivotante("blue");
var pc = new PorteCoulissante("red");

p = pp;
p.ouvrir(); //appelera fairePivoter() - POLYMORPHISME
p.fermer();

p = pc;
p.ouvrir();//appelera faireGlisser() - POLYMORPHISME
p.fermer();
