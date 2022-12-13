import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from '../model/equipe.model';
import { Joueur } from '../model/joueur.model';
@Injectable({
providedIn: 'root'
})
export class JoueurService {
joueurs : Joueur[];
joueur! : Joueur; 
categories : Equipe[];
joueursRecherche! :Joueur[];
constructor(private router:Router) {
this.categories = [ {idEq : 1, nomEq : "barcalona"},

{idEq : 2, nomEq : "real madrid"}];

this.joueurs = [
{ idJoueur : 1, nomJoueur : "Messi", prixJoueur : 10,dateCreation : new Date("01/14/2011"), equipe : {idEq : 1, nomEq : "barcalona"}},
{ idJoueur : 2, nomJoueur : "ronaldo", prixJoueur : 7,dateCreation : new Date("12/17/2010"), equipe : {idEq : 2, nomEq : "real madrid"}},
{ idJoueur : 3, nomJoueur :"ronaldinho", prixJoueur : 10,dateCreation : new Date("02/20/2020"),equipe : {idEq : 1, nomEq : "barcalona"}}
];
}
listeJoueurs():Joueur[] {
  return this.joueurs;
}
ajouterJoueur( prod: Joueur){
this.joueurs.push(prod);
this.router.navigate(['/joueurs'])
}
supprimerJoueur( prod: Joueur){
//supprimer le Joueur prod du tableau Joueurs
const index = this.joueurs.indexOf(prod, 0);
if (index > -1) {
this.joueurs.splice(index, 1);
}
//ou Bien
/* this.Joueurs.forEach((cur, index) => {
if(prod.idJoueur === cur.idJoueur) {
this.Joueurs.splice(index, 1);
}
}); */
}
consulterJoueur(id:number): Joueur{
  this.joueur = this.joueurs.find(p => p.idJoueur == id)!;
  return this.joueur;
  }
  updateJoueur(p:Joueur)
{
// console.log(p);
this.supprimerJoueur(p);
this.ajouterJoueur(p);
this.trierJoueurs();

}
trierJoueurs(){
  this.joueurs = this.joueurs.sort((n1,n2) => {
  if (n1.idJoueur! > n2.idJoueur!) {
  return 1;
  }
  if (n1.idJoueur! < n2.idJoueur!) {
  return -1;
  }
  return 0;
  });
  }
  listeCategories():Equipe[] {
    return this.categories;
    }
    consulterCategorie(id:number): Equipe{
      return this.categories.find(cat => cat.idEq == id)!;
      }


      rechercheParCategorie(idCat: number): Joueur[] {
        this.joueursRecherche=[];
        this.joueurs.forEach((cur,index) => {
          if(idCat == cur.equipe.idEq){
            console.log("cur"+cur);
            this.joueursRecherche.push(cur);
          }
        });
        return this.joueursRecherche;
        }  

        rechercherParNom(nom: String): Joueur[]{
          this.joueursRecherche = [];
      
          this.joueurs.forEach((cur, index) => {
           if(nom == cur.nomJoueur) {
               console.log("cur "+cur);
              this.joueursRecherche.push(cur);
               }
         });
         return this.joueursRecherche;
         }
     
}