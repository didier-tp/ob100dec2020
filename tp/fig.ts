
export abstract class Fig2D {
  public lineColor : string;
  public lineWidth : number ;
  public fillColor : string|undefined;
  
  constructor(lineColor : string = "black",
              lineWidth : number = 1,
              fillColor : string|undefined = undefined){
	 this.lineColor=lineColor;
	 this.lineWidth=lineWidth;
	 this.fillColor=fillColor;				  
  }
  
  public abstract performVisit(figVisitor : FigVisitor) :void;
  
}

export class Line  extends Fig2D{
  public x1:number;  
  public y1:number;
  public x2:number;
  public y2:number;
  constructor(x1:number = 0 , y1:number = 0 ,
              x2:number = 0 , y2:number = 0,
              lineColor : string = "black",
              lineWidth : number = 1){
      super(lineColor,lineWidth);
	  this.x1=x1;this.y1=y1; this.x2=x2; this.y2=y2;
  }
   public performVisit(figVisitor : FigVisitor) :void{
	   figVisitor.doActionForLine(this);
   }
}

export class Circle  extends Fig2D{
  public xC:number;
  public yC:number;
  public r:number;
  constructor(xC:number=0,yC:number=0,r:number=0,
              lineColor : string = "black",
              lineWidth : number = 1,
              fillColor : string|undefined = undefined){
      super(lineColor,lineWidth,fillColor);
	  this.xC=xC; this.yC=yC; this.r=r;
  }
  public performVisit(figVisitor : FigVisitor) :void{
	   figVisitor.doActionForCircle(this);
   }
}

export class Rectangle  extends Fig2D{
  public x1:number;
  public y1:number;
  public width:number;
  public height:number;
  
  constructor(x1:number = 0 ,
              y1:number = 0 ,
              width:number = 0 ,
              height:number = 0,
              lineColor : string = "black",
              lineWidth : number = 1,
              fillColor : string|undefined = undefined){
      super(lineColor,lineWidth,fillColor);
	  this.x1=x1; this.y1=y1;
	  this.width=width; this.height=height;
  }
  public performVisit(figVisitor : FigVisitor) :void{
	   figVisitor.doActionForRectangle(this);
   }
}

export interface FigVisitor {
    doActionForCircle( c : Circle) : void;
    doActionForLine( l : Line) : void;
    doActionForRectangle(r : Rectangle) : void;
    doInitAction() : void; //exemple: generate first line or init buffer
    doEndAction() : void; //exemple : generate last line or write buffer
  }




