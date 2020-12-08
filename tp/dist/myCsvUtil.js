"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyCsvUtil = void 0;
var MyCsvUtil = /** @class */ (function () {
    function MyCsvUtil() {
    }
    MyCsvUtil.csvContent = function (tabObj) {
        var s = MyCsvUtil.headerCsvLine(tabObj[0]);
        for (var i in tabObj) {
            s = s + "\n" + MyCsvUtil.dataCsvLine(tabObj[i]);
        }
        return s;
    };
    MyCsvUtil.headerCsvLine = function (obj) {
        var s = "";
        for (var property in obj) {
            s = s + property + ";";
        }
        var lastPos = s.lastIndexOf(";");
        if (lastPos >= 0)
            s = s.substring(0, lastPos); //supprimer le ";" à la fin
        return s;
    };
    MyCsvUtil.dataCsvLine = function (obj) {
        var s = "";
        for (var property in obj) {
            s = s + obj[property] + ";";
        }
        var lastPos = s.lastIndexOf(";");
        if (lastPos >= 0)
            s = s.substring(0, lastPos); //supprimer le ";" à la fin
        return s;
    };
    return MyCsvUtil;
}());
exports.MyCsvUtil = MyCsvUtil;
