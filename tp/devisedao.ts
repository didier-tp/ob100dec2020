import { Devise } from "./devise";

/*
une interface ressemble à une classe abstraite
mais à l'intérieur toutes les méthodes sont d'office abstraites
(public par défaut)
*/


export interface DeviseDao {
    saveListDevises(tabDevises:Devise[]):void ;
    loadListDevise():Devise[];
}