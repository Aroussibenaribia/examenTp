import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoueursComponent } from './joueur/joueur.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { FormsModule } from '@angular/forms';
import { UpdateJoueurComponent } from './services/update-joueur/update-joueur.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParEquipeComponent } from './recherche-par-equipe/recherche-par-equipe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';



@NgModule({
  declarations: [
    AppComponent,
    JoueursComponent,
    AddJoueurComponent,
    UpdateJoueurComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParEquipeComponent,
    RechercheParNomComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
