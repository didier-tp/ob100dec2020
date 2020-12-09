import { Circle, Fig2D, FigVisitor, Line, Rectangle } from "./fig";

  
 export class ConsoleJsonVisitor  implements FigVisitor{
    private _alreadyOne  = false;

    doInitAction(): void {
        console.log("[");
    }
    doEndAction(): void {
        console.log("]");
    }

    private _doActionForFig(f: Fig2D, typeFig:string): void {
        let separateur = this._alreadyOne?",":"";
        console.log(separateur + '{ "'+typeFig+'" :' +JSON.stringify(f) +" }");
        this._alreadyOne =true;
      }

    doActionForCircle(c: Circle): void {
        this._doActionForFig(c,"circle");
    }  
    
    doActionForLine(l: Line): void {
        this._doActionForFig(l,"line");
    }
    doActionForRectangle(r: Rectangle): void {
        this._doActionForFig(r,"rectangle");
    }
  }

  export class ConsoleSvgVisitor  implements FigVisitor{

    doInitAction(): void {
        console.log("<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'>");
    }
    doEndAction(): void {
        console.log("</svg>");
    }

    private _svgStyle(f: Fig2D){
        let sStyle = "";
        if(f.lineColor) {
            sStyle += `stroke:${f.lineColor};`
         }
         if(f.lineWidth) {
            sStyle += `stroke-width:${f.lineWidth};`
         }
        if(f.fillColor) {
           sStyle += `fill:${f.fillColor}`
        } else{
            sStyle += `fill:none`
        }
        return sStyle?`style='${sStyle}'`:``;
    }

    doActionForCircle(c: Circle): void {
        //<circle cx='140' cy='200' r='50' style='fill:red' />
        console.log(`<circle cx='${c.xC}' cy='${c.yC}' r='${c.r}' ${this._svgStyle(c)} />`)
    }  
    
   
    doActionForLine(l: Line): void {
        //<line x1='150' y1='50' x2='250' y2='230'  style='fill:blue;stroke: mediumblue;' />
        console.log(`<line x1='${l.x1}' y1='${l.y1}' x2='${l.x2}' y2='${l.y2}'  ${this._svgStyle(l)} />`)
    }
    doActionForRectangle(r: Rectangle): void {
         //<rect x='50' y='50' width='80' height='80' style='fill:green' />
         console.log(`<rect x='${r.x1}' y='${r.y1}' width='${r.width}' height='${r.height}' ${this._svgStyle(r)} />`)
    }
  }

  //mode="json" ou "svg"
  function my_ts_test(mode : string){
    var tabFig : Fig2D[] = new Array<Fig2D>();
    tabFig.push(new Line(20,20,180,200,"red"));
    tabFig.push(new Circle(100,100,50,"blue"));
    tabFig.push(new Circle(250,200,50,"black",2,"blue"));
    tabFig.push(new Rectangle(200,100,50,60,"green"));
    tabFig.push(new Rectangle(20,100,50,60,"black",3,"green"));

    var visitor : FigVisitor;
    switch(mode){
        case "svg":
            visitor = new ConsoleSvgVisitor();
            break;
        case "json":
        default: 
             visitor = new ConsoleJsonVisitor();
    }
  
    visitor.doInitAction();
    for( let f  of tabFig){
      f.performVisit(visitor);
    }
    visitor.doEndAction();

}

my_ts_test("json");
//my_ts_test("svg");

//NB: lancer node dist/fig-visitor.js > figs.json
// ou bien   node dist/fig-visitor.js > figs.svg
// pour générer un fichier .