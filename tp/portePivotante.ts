import { Porte } from "./porte";

export class PortePivotante extends Porte {
    public angleOuverture : number ;

    constructor(pcouleur:string="white"){
        super(pcouleur);
        this.angleOuverture = 0; //0 dégré , porte initialement fermée
    }

    /*private*/ public fairePivoter(angle:number){
        this.angleOuverture=angle;
        console.log("nouvel angleOuverture="+this.angleOuverture);
    }

    public ouvrir() : void {
        this.fairePivoter(90); //90° pour porte bien ouverte
    }

    public fermer() : void {
        this.fairePivoter(0); //0° pour porte bien fermée
    }
}