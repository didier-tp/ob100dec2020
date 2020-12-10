"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleSvgVisitor = exports.ConsoleJsonVisitor = void 0;
var fig_1 = require("./fig");
var ConsoleJsonVisitor = /** @class */ (function () {
    function ConsoleJsonVisitor() {
        this._alreadyOne = false;
    }
    ConsoleJsonVisitor.prototype.doInitAction = function () {
        console.log("[");
    };
    ConsoleJsonVisitor.prototype.doEndAction = function () {
        console.log("]");
    };
    ConsoleJsonVisitor.prototype._doActionForFig = function (f, typeFig) {
        var separateur = this._alreadyOne ? "," : "";
        console.log(separateur + '{ "' + typeFig + '" :' + JSON.stringify(f) + " }");
        this._alreadyOne = true;
    };
    ConsoleJsonVisitor.prototype.doActionForCircle = function (c) {
        this._doActionForFig(c, "circle");
    };
    ConsoleJsonVisitor.prototype.doActionForLine = function (l) {
        this._doActionForFig(l, "line");
    };
    ConsoleJsonVisitor.prototype.doActionForRectangle = function (r) {
        this._doActionForFig(r, "rectangle");
    };
    return ConsoleJsonVisitor;
}());
exports.ConsoleJsonVisitor = ConsoleJsonVisitor;
var ConsoleSvgVisitor = /** @class */ (function () {
    function ConsoleSvgVisitor() {
    }
    ConsoleSvgVisitor.prototype.doInitAction = function () {
        console.log("<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'>");
    };
    ConsoleSvgVisitor.prototype.doEndAction = function () {
        console.log("</svg>");
    };
    ConsoleSvgVisitor.prototype._svgStyle = function (f) {
        var sStyle = "";
        if (f.lineColor) {
            sStyle += "stroke:" + f.lineColor + ";";
        }
        if (f.lineWidth) {
            sStyle += "stroke-width:" + f.lineWidth + ";";
        }
        if (f.fillColor) {
            sStyle += "fill:" + f.fillColor;
        }
        else {
            sStyle += "fill:none";
        }
        return sStyle ? "style='" + sStyle + "'" : "";
    };
    ConsoleSvgVisitor.prototype.doActionForCircle = function (c) {
        //<circle cx='140' cy='200' r='50' style='fill:red' />
        console.log("<circle cx='" + c.xC + "' cy='" + c.yC + "' r='" + c.r + "' " + this._svgStyle(c) + " />");
    };
    ConsoleSvgVisitor.prototype.doActionForLine = function (l) {
        //<line x1='150' y1='50' x2='250' y2='230'  style='fill:blue;stroke: mediumblue;' />
        console.log("<line x1='" + l.x1 + "' y1='" + l.y1 + "' x2='" + l.x2 + "' y2='" + l.y2 + "'  " + this._svgStyle(l) + " />");
    };
    ConsoleSvgVisitor.prototype.doActionForRectangle = function (r) {
        //<rect x='50' y='50' width='80' height='80' style='fill:green' />
        console.log("<rect x='" + r.x1 + "' y='" + r.y1 + "' width='" + r.width + "' height='" + r.height + "' " + this._svgStyle(r) + " />");
    };
    return ConsoleSvgVisitor;
}());
exports.ConsoleSvgVisitor = ConsoleSvgVisitor;
//mode="json" ou "svg"
function my_ts_test(mode) {
    var tabFig = new Array();
    tabFig.push(new fig_1.Line(20, 20, 180, 200, "red"));
    tabFig.push(new fig_1.Circle(100, 100, 50, "blue"));
    tabFig.push(new fig_1.Circle(250, 200, 50, "black", 2, "blue"));
    tabFig.push(new fig_1.Rectangle(200, 100, 50, 60, "green"));
    tabFig.push(new fig_1.Rectangle(20, 100, 50, 60, "black", 3, "green"));
    var visitor;
    switch (mode) {
        case "svg":
            visitor = new ConsoleSvgVisitor();
            break;
        case "json":
        default:
            visitor = new ConsoleJsonVisitor();
    }
    visitor.doInitAction();
    for (var _i = 0, tabFig_1 = tabFig; _i < tabFig_1.length; _i++) {
        var f = tabFig_1[_i];
        f.performVisit(visitor);
    }
    visitor.doEndAction();
}
//my_ts_test("json");
my_ts_test("svg");
//NB: lancer node dist/fig-visitor.js > figs.json
// ou bien   node dist/fig-visitor.js > figs.svg
// pour générer un fichier .
