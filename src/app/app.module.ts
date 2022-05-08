import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { ContactComponent } from './contact/contact.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ListFormationComponent } from './list-formation/list-formation.component';
import { AccueilBackComponent } from './backOffice/accueil-back/accueil-back.component';
import { MenuBackComponent } from './backOffice/menu-back/menu-back.component';
import { ListeFComponent } from './backOffice/formation/liste-f/liste-f.component';
import { AddformationComponent } from './backOffice/formation/addformation/addformation.component';
import { UpdateformationComponent } from './backOffice/formation/updateformation/updateformation.component';
import { ListestagiaireComponent } from './backOffice/stagiaire/listestagiaire/listestagiaire.component';
import { AddstagiaireComponent } from './backOffice/stagiaire/addstagiaire/addstagiaire.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageAccueilComponent,
    ContactComponent,
    CatalogueComponent,
    PageNotFoundComponent,
    ListFormationComponent,
    AccueilBackComponent,
    MenuBackComponent,
    ListeFComponent,
    AddformationComponent,
    UpdateformationComponent,
    ListestagiaireComponent,
    AddstagiaireComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
