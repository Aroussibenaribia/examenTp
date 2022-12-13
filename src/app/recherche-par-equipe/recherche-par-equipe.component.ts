import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-recherche-par-equipe',
  templateUrl: './recherche-par-equipe.component.html',
  styleUrls: ['./recherche-par-equipe.component.css']
})
export class RechercheParEquipeComponent implements OnInit {
  IdEquipe! : number;
  categories! : Equipe[];
  joueurs! : Joueur[];

  constructor(private joueurService : JoueurService ) { }

  ngOnInit(): void {
    this.categories=this.joueurService.listeCategories();
    this.joueurs=[];
  }
  onChange(){
    console.log(this.IdEquipe)
this.joueurs=this.joueurService.rechercheParCategorie(this.IdEquipe);

  }

}
