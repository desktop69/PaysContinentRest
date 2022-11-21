import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaysComponent } from './add-pays/add-pays.component';
import { PaysComponent } from './pays/pays.component';
import { UpdatePaysComponent } from './update-pays/update-pays.component';

const routes: Routes = [
  {path : "pays", component : PaysComponent},
  {path : "addPays", component : AddPaysComponent},
  { path: "", redirectTo: "pays", pathMatch: "full" },
  {path: "updatePays/:id", component: UpdatePaysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
