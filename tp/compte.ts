//import { Client } from "./client";

export class Compte {
    public numero :number;
    public label :string;
    private _solde :number;
    //public proprietaire : Client =null; // si association bi-directionnel

    public static tauxInteretDecouvert :number = 0.01 ; //1%

    //une méthode static peut être directement appelée avec un prefixe NomClasse.
    public static tauxInteretDecouvertEnPourcentage() : number{
        return Compte.tauxInteretDecouvert * 100;
    }

    public static decouvertAutorise :number = -300; 
          //ici valeur partagée commune
          //à toutes les instances de la classe Compte
          //-300 est ici une valeur par défaut (qui pourra changer)

    //get/set sur solde:
    public get solde() :number{
        return this._solde;
    }

    public set solde(soldeSouhaite:number){
        if(soldeSouhaite>= Compte.decouvertAutorise){
            this._solde = soldeSouhaite;
        }
        else{
            //this._solde pas modifié
            //console.log("solde inférieur au découvert autorisé invalide");
            throw "solde inférieur au découvert autorisé [" 
                  + Compte.decouvertAutorise
                  +"] invalide"; //remoter une exception 
                                //à rattraper par try/catch depuis l'appel extérieur
        }
    }

    //constructeur = fonction interne à la classe qui sert à initialiser
    //les valeurs internes d'une instance dès sa construction 
    //(lors du new appelé de l'extérieur)
    constructor(numero:number=0, libelle:string="?", soldeInitial:number=0.0){
        this.numero = numero;
        this.label = libelle;
        this._solde = soldeInitial;
    }

    public debiter(montant :number):void {
        //this._solde = this._solde - montant;
        this.solde = this.solde -montant;
    }

    public crediter(montant :number):void {
        this._solde = this._solde + montant;
    }
}