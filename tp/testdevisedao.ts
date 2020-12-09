import { Devise } from "./devise";
import { DeviseDao } from "./devisedao";
import { DeviseDaoCsv } from "./devisedaocsv";
import { DeviseDaoJson } from "./devisedaojson";

class TestDeviseDao {
    public deviseDao : DeviseDao;// deviseDao est une référence vers
                                 //un objet quelconque (csv ou json ou ...)
                                 //qui implémente l'interface DeviseDao
    public tabDevises : Devise[];

    constructor(){ //initialiser un jeu de données:
        this.tabDevises = [];
        this.tabDevises.push(new Devise('EUR','euro',1));
        this.tabDevises.push(new Devise('USD','dollar',1.1));
        this.tabDevises.push(new Devise('GBP','livre',0.9));    
    }

    public sauvegarder(){
        this.deviseDao.saveListDevises(this.tabDevises);//polymorphisme
    }
}

var testDeviseDao = new TestDeviseDao();
testDeviseDao.deviseDao= new DeviseDaoCsv();
testDeviseDao.sauvegarder();
//testDeviseDao.deviseDao= new DeviseDaoJson();
testDeviseDao.sauvegarder();

