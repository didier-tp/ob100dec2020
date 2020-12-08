export class Adresse {
    public num : string;
    public rue : string;
    public codePostal : string;
    public ville : string;

    constructor(num:string="0",rue:string="?",cp : string ="?" , ville:string="?"){
        this.num=num; this.rue=rue; this.codePostal=cp; this.ville=ville;
    }
}