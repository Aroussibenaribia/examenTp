import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from '../model/equipe.model';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrls: ['./add-joueur.component.css']
})
export class AddJoueurComponent implements OnInit {
  newJoueur = new Joueur();


categories! : Equipe[];
newIdCat! : number;
newCategorie! : Equipe;
constructor(private produitService: JoueurService,

private router :Router) { }

ngOnInit() {
this.categories = this.produitService.listeCategories();
}
addJoueur() {
this.newCategorie =
this.produitService.consulterCategorie(this.newIdCat);
this.newJoueur.equipe = this.newCategorie;
this.produitService.ajouterJoueur(this.newJoueur);
this.router.navigate(['joueurs']);
}}
