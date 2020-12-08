import { format } from "path";

export class MyCsvUtil{

    public static csvContent(tabObj:object[]):string{
        let s=MyCsvUtil.headerCsvLine(tabObj[0]);
        for(let i in tabObj){
            s=s+"\n"+MyCsvUtil.dataCsvLine(tabObj[i]);
        }
        return s;
    }

    public static headerCsvLine(obj:object):string{
         let s = "";
         for(let property in obj){
             s=s+property+";"
         }
         let lastPos = s.lastIndexOf(";");
         if(lastPos>=0)
            s=s.substring(0,lastPos); //supprimer le ";" à la fin
         return s;
    }

    public static dataCsvLine(obj:object):string{
        let s = "";
        for(let property in obj){
            s=s+obj[property]+";"
        }
        let lastPos = s.lastIndexOf(";");
         if(lastPos>=0)
            s=s.substring(0,lastPos); //supprimer le ";" à la fin
        return s;
   }
}