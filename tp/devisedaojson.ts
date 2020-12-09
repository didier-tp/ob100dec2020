import { Devise } from "./devise";
import { DeviseDao } from "./devisedao";
import { MyFile } from "./myFile";

export class DeviseDaoJson implements DeviseDao{

    saveListDevises(tabDevises: Devise[]): void {
        //pré-version simplifiée:
        //console.log(JSON.stringify(tabDevises));

       let myCsvFile = new MyFile("devises.json");
       myCsvFile.writeAllDataInFile( JSON.stringify(tabDevises) );
    }

    loadListDevise(): Devise[] {
        throw new Error("Method not implemented.");
    }

}