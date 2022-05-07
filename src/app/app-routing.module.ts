import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilBackComponent } from './backOffice/accueil-back/accueil-back.component';
import { AddformationComponent } from './backOffice/formation/addformation/addformation.component';
import { ListeFComponent } from './backOffice/formation/liste-f/liste-f.component';
import { UpdateformationComponent } from './backOffice/formation/updateformation/updateformation.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ContactComponent } from './contact/contact.component';
import { ListFormationComponent } from './list-formation/list-formation.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'page-accueil', component: PageAccueilComponent },
  {path: '', redirectTo: 'page-accueil', pathMatch: 'full'},
  {path: 'catalogue', component: CatalogueComponent },
  {path: 'formation/:id', component: ListFormationComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'admin', component: AccueilBackComponent },
  {path: 'admin/formation/liste', component: ListeFComponent },
  {path: 'admin/formation/ajouter', component: AddformationComponent },
  {path: 'admin/formation/udateformation/:id', component: UpdateformationComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
