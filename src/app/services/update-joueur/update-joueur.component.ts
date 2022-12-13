import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/model/equipe.model';
import { Joueur } from 'src/app/model/joueur.model';
import { JoueurService } from '../joueur.service';

@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styleUrls: ['./update-joueur.component.css']
})
export class UpdateJoueurComponent implements OnInit {
  currentJoueur = new Joueur();
  categories! : Equipe[];
updatedCatId! : number;
 
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
              private JoueurService: JoueurService) { }

ngOnInit(): void {
this.categories = this.JoueurService.listeCategories();
this.currentJoueur =
this.JoueurService.consulterJoueur(this.activatedRoute.snapshot.params['id']);
this.updatedCatId=this.currentJoueur.equipe.idEq;
}
  updateJoueur()
{ this.currentJoueur.equipe=this.JoueurService.consulterCategorie(this.updatedCatId);
  this.JoueurService.updateJoueur(this.currentJoueur);
  this.router.navigate(['joueurs']);
}

}
