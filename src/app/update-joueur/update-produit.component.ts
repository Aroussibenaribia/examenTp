import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { JoueurService } from '../services/joueur.service';
import { Joueur } from '../model/joueur.model';
import { Equipe } from '../model/equipe.model';
@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styles: [
  ]
})
export class UpdateJoueurComponent implements OnInit {
  currentJoueur = new Joueur();
  categories! : Equipe[];
updatedCatId! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private router:Router,
    private joueurService: JoueurService){ }

    ngOnInit(): void {
      this.categories = this.joueurService.listeCategories();
      this.currentJoueur =
      this.joueurService.consulterJoueur(this.activatedRoute.snapshot.params['id']);
      this.updatedCatId=this.currentJoueur.equipe.idEq;
      }
      updateJoueur() {
        this.currentJoueur.equipe=this.joueurService.consulterCategorie(this.updatedCatId);
        this.joueurService.updateJoueur(this.currentJoueur);
        this.router.navigate(['joueurs']);
        }


}
