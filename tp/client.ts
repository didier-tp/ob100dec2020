import { Compte} from './compte'
import { Adresse} from './adresse'

export class Client {
    public numero: number;
    public nom: string;
    public prenom: string;
    public adressePrincipale : Adresse; //vers 1
    public comptes : Compte[]; //vers *

    constructor(num:number=0,nom:string="?",prenom:string="?"){
        this.numero= num; this.nom=nom; this.prenom = prenom;
        this.adressePrincipale = null; //adresse pas encore connue/renseignée
        this.comptes = []; //liste vide pour commencer
    }

    public ajouterCompte(compte:Compte){
        //compte.proprietaire = this; //si bidirectionnel
        this.comptes.push(compte); //.push() est prédéfini 
                                   //sur un tableau javascript pour ajouter un élément
                                   // souvent .add() avec d'autres langages
    }
}