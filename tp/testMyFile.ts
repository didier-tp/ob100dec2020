import { Devise } from "./devise";
import { MyCsvUtil } from "./myCsvUtil";
import { MyFile } from "./myFile";

var myFile = new MyFile("f1.txt");
myFile.writeAllDataInFile("un deux trois");
var gererDonneeslues = function (err:any,data:string){
   if(err){
       console.log("erreur:" +err);
   }
   else{
       console.log("data: " +data);
   }
}
myFile.readAllDataInFile(gererDonneeslues);

var myCsvFile = new MyFile("f1.csv");
var objDevise1 = new Devise('EUR','Euro',1);
var objDevise2 = new Devise('USD','Dollar',1.1);
var objDevise3 = new Devise('GBP','Livre',0.9);
var tabDevises = [ objDevise1, objDevise2, objDevise3];
var cvsFileContent = MyCsvUtil.csvContent(tabDevises); 
myCsvFile.writeAllDataInFile(cvsFileContent);
