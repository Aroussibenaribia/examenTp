import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {
  
  joueurs! : Joueur[];
  nomJoueur!: String;
  joueurs1! : Joueur[];
  constructor(private joueurService : JoueurService ) { }

  ngOnInit(): void {
    this.joueurs=this.joueurService.listeJoueurs();
    console.log(this.joueurs)
    
    
  }
  onChange(){
    console.log(this.nomJoueur)
this.joueurs1=this.joueurService.rechercherParNom(this.nomJoueur);

  }}