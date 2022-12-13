import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Joueur } from '../model/joueur.model';
import { AuthService } from '../services/auth.service';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueur.component.html',
})
export class JoueursComponent implements OnInit {
  joueurs : Joueur[];
  constructor(private joueurService: JoueurService,
    public authService : AuthService ) {
    this.joueurs = joueurService.listeJoueurs();
    }

  ngOnInit(): void {
  }
  supprimerJoueur(p: Joueur)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.joueurService.supprimerJoueur(p);
}
}
