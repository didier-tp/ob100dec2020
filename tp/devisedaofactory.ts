import { DeviseDao } from "./devisedao";
import { DeviseDaoCsv } from "./devisedaocsv";
import { DeviseDaoJson } from "./devisedaojson";

export class DeviseDaoFactory{

    private static uniqueInstance :DeviseDaoFactory =null;
    
    public static getInstance() :DeviseDaoFactory{
        if(DeviseDaoFactory.uniqueInstance==null){
            DeviseDaoFactory.uniqueInstance= new DeviseDaoFactory();
        }
        return DeviseDaoFactory.uniqueInstance;
    }
    //constructeur exceptionnellement privé avec Singleton
    //pour interdir le new direct et forcer à passer par getInstance()
    private constructor(){} 

    public createDao() : DeviseDao{
        let versionDao="json"; //ou bien "csv" 
        //(éventuellement selon fichier de config)

        let deviseDao : DeviseDao; 
        if(versionDao=="csv")
            deviseDao = new DeviseDaoCsv();
        else  if(versionDao=="json")
           deviseDao = new DeviseDaoJson();
        
        return deviseDao;
    }
}