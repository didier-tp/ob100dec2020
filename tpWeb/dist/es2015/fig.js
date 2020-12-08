export class Fig2D {
    constructor(lineColor = "black", lineWidth = 1, fillColor = undefined) {
        this.lineColor = lineColor;
        this.lineWidth = lineWidth;
        this.fillColor = fillColor;
    }
    setStyles(ctx) {
        ctx.strokeStyle = this.lineColor;
        ctx.lineWidth = this.lineWidth;
        if (this.fillColor != null) {
            ctx.fillStyle = this.fillColor;
            ctx.fill();
        }
    }
}
export class Line extends Fig2D {
    constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0, lineColor = "black", lineWidth = 1) {
        super(lineColor, lineWidth);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        super.setStyles(ctx);
        ctx.stroke();
    }
}
export class Circle extends Fig2D {
    constructor(xC = 0, yC = 0, r = 0, lineColor = "black", lineWidth = 1, fillColor = undefined) {
        super(lineColor, lineWidth, fillColor);
        this.xC = xC;
        this.yC = yC;
        this.r = r;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.xC, this.yC, this.r, 0, 2 * Math.PI, false);
        super.setStyles(ctx);
        ctx.stroke();
    }
}
export class Rectangle extends Fig2D {
    constructor(x1 = 0, y1 = 0, width = 0, height = 0, lineColor = "black", lineWidth = 1, fillColor = undefined) {
        super(lineColor, lineWidth, fillColor);
        this.x1 = x1;
        this.y1 = y1;
        this.width = width;
        this.height = height;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x1, this.y1, this.width, this.height);
        super.setStyles(ctx);
        ctx.stroke();
    }
}
