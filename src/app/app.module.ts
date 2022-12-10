import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { PaysComponent } from './pays/pays.component';
import { AddPaysComponent } from './add-pays/add-pays.component';
import { UpdatePaysComponent } from './update-pays/update-pays.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParContinentComponent } from './recherche-par-continent/recherche-par-continent.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeContinentsComponent } from './liste-continents/liste-continents.component';
import { UpdateContinentsComponent } from './update-continents/update-continents.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component'; 
@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    PaysComponent,
    AddPaysComponent,
    UpdatePaysComponent,
    RechercheParContinentComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeContinentsComponent,
    UpdateContinentsComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,MatPaginatorModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
