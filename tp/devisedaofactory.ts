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

    public createDao() : DeviseDao{
        let versionDao="csv"; //ou bien "json" 
        //(éventuellement selon fichier de config)

        let deviseDao : DeviseDao; 
        if(versionDao=="csv")
            deviseDao = new DeviseDaoCsv();
        else  if(versionDao=="json")
           deviseDao = new DeviseDaoJson();
        
        return deviseDao;
    }
}