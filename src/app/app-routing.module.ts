import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { JoueurGuard } from './joueur.guard';
import { JoueursComponent } from './joueur/joueur.component';
import { LoginComponent } from './login/login.component';
import { RechercheParEquipeComponent } from './recherche-par-equipe/recherche-par-equipe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateJoueurComponent } from './services/update-joueur/update-joueur.component';


const routes: Routes = [
  {path:"joueurs",component:JoueursComponent},
  {path: "updateJoueur/:id", component: UpdateJoueurComponent},
  {path:"",redirectTo:"joueurs",pathMatch:"full"},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path : "add-joueur", component : AddJoueurComponent, canActivate:[JoueurGuard]},
  {path: 'login', component: LoginComponent},
  {path: "rechercheParEquipe", component : RechercheParEquipeComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
