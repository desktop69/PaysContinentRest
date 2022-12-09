import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaysComponent } from './add-pays/add-pays.component';
import { ListeContinentsComponent } from './liste-continents/liste-continents.component';
import { PaysComponent } from './pays/pays.component';
import { RechercheParContinentComponent } from './recherche-par-continent/recherche-par-continent.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdatePaysComponent } from './update-pays/update-pays.component';

const routes: Routes = [
  {path : "pays", component : PaysComponent},
  {path : "addPays", component : AddPaysComponent},
  { path: "", redirectTo: "pays", pathMatch: "full" },
  {path: "updatePays/:id", component: UpdatePaysComponent},
  {path: "rechercheParContinent", component : RechercheParContinentComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeContinents", component : ListeContinentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
