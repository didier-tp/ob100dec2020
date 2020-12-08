import { Porte } from "./porte";

export class PorteCoulissante extends Porte {
    public ecartement : number ;

    constructor(pcouleur:string="green"){
        super(pcouleur);
        this.ecartement = 0; //0 cm, porte initialement fermée
    }

    private faireCoulisser(ecartement:number){
        this.ecartement=ecartement;
        console.log("nouvel ecartement="+this.ecartement);
    }

    public ouvrir() : void {
        this.faireCoulisser(80); //80cm pour porte bien ouverte
    }

    public fermer() : void {
        this.faireCoulisser(0); //0cm pour porte bien fermée
    }
}