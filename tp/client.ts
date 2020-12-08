import { Compte} from './compte'
import { Personne } from './personne';


export class Client extends Personne{
    public numero: number;
    public comptes : Compte[]; //vers *

    constructor(num:number=0,pnom:string="?",pprenom:string="?"){
        super(pnom,pprenom); //on repasse les paramètres nom et prenom
                           //au consctructeur de la classe héritée
        this.numero= num; 
        this.comptes = []; //liste vide pour commencer
    }

    //redéfinition facultative de afficher() sur la classe Client
    public afficher(): void{
        console.log("numClient=" + this.numero);//affichage supplémentaire amélioré
        super.afficher(); //appeler la version héritée (codée sur Personne)
    }

    public ajouterCompte(compte:Compte){
        //compte.proprietaire = this; //si bidirectionnel
        this.comptes.push(compte); //.push() est prédéfini 
                                   //sur un tableau javascript pour ajouter un élément
                                   // souvent .add() avec d'autres langages
    }
}