export class Serie<T> {
    public label : string ;
    public values : Array<T>;

    constructor(label : string ="?",
                values : Array<T>=[]){
        this.label=label;
        this.values=values;
    }
    
    push(val:T){this.values.push(val);}
}

