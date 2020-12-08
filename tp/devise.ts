export class Devise{
    public code : string; //ex: "EUR" ou "USD"
    public nom : string; //ex: "euro" ou "dollar"
    public change: number; //nb de ...  pour 1 euro

    constructor(code:string="?",nom:string="?",change:number=1){
       this.code=code; this.nom = nom; this.change=change;
    }
}