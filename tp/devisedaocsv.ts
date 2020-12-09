import { Devise } from "./devise";
import { DeviseDao } from "./devisedao";
import { MyCsvUtil } from "./myCsvUtil";
import { MyFile } from "./myFile";

export class DeviseDaoCsv implements DeviseDao{

    saveListDevises(tabDevises: Devise[]): void {
       let myCsvFile = new MyFile("devises.csv");
       myCsvFile.writeAllDataInFile( MyCsvUtil.csvContent(tabDevises) );
    }

    loadListDevise(): Devise[] {
        throw new Error("Method not implemented.");
    }

}