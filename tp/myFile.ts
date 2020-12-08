import * as fs from 'fs'; 
//npm install -s @types/node

//classe utilitaire pour lire ou ecrire un fichier

export class MyFile{
    public fileName : string;

    constructor(fileName:string="data.txt"){
        this.fileName=fileName;
    }

    public writeAllDataInFile(data: string){
        fs.writeFile(this.fileName,data,function(err) {
            if (err) 
                console.error(err);
            else
                console.log("data  written in file");
        });
    }

    public readAllDataInFile(callbackWithErrAndData):void{
        fs.readFile(this.fileName,callbackWithErrAndData);
    }
}