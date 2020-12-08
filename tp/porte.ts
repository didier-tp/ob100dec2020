export class Porte{
    public couleur :string ;
    constructor(couleur :string ="black"){
        this.couleur = couleur;
    }

    public ouvrir() : void {} //code qui sera redéfini dans sous classes
    public fermer() : void {} //code qui sera redéfini dans sous classes
}