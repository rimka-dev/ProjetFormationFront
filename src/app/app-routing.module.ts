import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ContactComponent } from './contact/contact.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'page-accueil', component: PageAccueilComponent },
  {path: '', redirectTo: 'page-accueil', pathMatch: 'full'},
  {path: 'catalogue', component: CatalogueComponent },
  {path: 'contact', component: ContactComponent },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
