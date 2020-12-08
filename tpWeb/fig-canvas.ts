import { Fig2D , Line, Rectangle, Circle } from "./fig";

 window.addEventListener("load", function(){
	 document.querySelector('#btnClear').addEventListener('click',function(){
		 console.log("clear");
		 clear_canvas();
	 });

	 document.querySelector('#btnDessiner').addEventListener('click',function(){
		console.log("dessinerQuelquesFigures");
        dessinerQuelquesFigures();		
	});

 });


	function clear_canvas(){
		var canvasElement :any = document.getElementById("myCanvas");
		var ctx  = canvasElement.getContext("2d");
        ctx.clearRect ( 0 , 0 , canvasElement.width, canvasElement.height );
	}

	function dessinerQuelquesFigures(){
		var tabFig : Fig2D[] = new Array<Fig2D>();
		tabFig.push(new Line(20,20,180,200,"red"));
		tabFig.push(new Circle(100,100,50,"blue"));
		tabFig.push(new Circle(250,200,50,"black",1,"blue"));
		tabFig.push(new Rectangle(200,100,50,60,"green"));
		tabFig.push(new Rectangle(20,100,50,60,"black",1,"green"));
	
		var canvasElement :any = document.getElementById("myCanvas");
		var ctx  = canvasElement.getContext("2d");
		for(let i=0; i<tabFig.length; i++){
			tabFig[i].draw(ctx);
		}
	
	}
	