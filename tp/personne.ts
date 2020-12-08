import { Adresse} from './adresse'

export class Personne{

    public nom: string;
    public prenom: string;
    public adressePrincipale : Adresse; //vers 1

    constructor(nom:string="?",prenom:string="?"){
        this.nom = nom;
        this.prenom = prenom;
        this.adressePrincipale = null; //adresse pas encore connue/renseignée
    }

    public nomComplet() : string{
        return this.prenom + " " + this.nom;
    }

    public afficher() : void{
        console.log(this.nomComplet() 
        + ",adresse=" + JSON.stringify(this.adressePrincipale));
    }
}