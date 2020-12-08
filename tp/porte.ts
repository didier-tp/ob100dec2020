export abstract class Porte{
    public couleur :string ;
    constructor(couleur :string ="black"){
        this.couleur = couleur;
    }
    /*
    //ancien code (sans abstract)
    public ouvrir() : void {} //code qui sera redéfini dans sous classes
    public fermer() : void {} //code qui sera redéfini dans sous classes
    */
   public abstract ouvrir() : void ; //à coder dans sous classes
   public abstract fermer() : void ; //à coder dans sous classes
}