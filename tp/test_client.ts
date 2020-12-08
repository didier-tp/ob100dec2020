import { Adresse } from "./adresse";
import { Client } from "./client";
import { Compte } from "./compte";

var client1 = new Client(1,"Bon","jean");
var adresse1 = new Adresse("4 bis","rue elle","59000","Lille");
client1.adressePrincipale=adresse1;

var compte1 = new Compte(1,"compte courant",100.0);
client1.ajouterCompte(compte1);
client1.ajouterCompte(new Compte(567,"livretA",200.0));

//console.log("proprétaire:" + compte1.proprietaire.nom); //si bi_directionnel

//affichages:
console.log("client1 au format json: " +JSON.stringify(client1));
console.log("prenom et nom du client1: " + client1.prenom + " " + client1.nom);
console.log("ville du client1: " + client1.adressePrincipale.ville);
console.log("comptes du client1:");
for(let i=0; i<client1.comptes.length; i++){
    console.log("\t solde=" + client1.comptes[i].solde );
}
