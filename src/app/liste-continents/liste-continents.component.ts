import { Component, OnInit } from '@angular/core';
import { Continent } from '../model/Continent.model';
import { PayService } from '../services/pay.service';

@Component({
  selector: 'app-liste-continents',
  templateUrl: './liste-continents.component.html',
  styles: [
  ]
})
export class ListeContinentsComponent implements OnInit {
  continents! : Continent[];
  updatedCont:Continent = {"idCat":0,"nomcont":"","km":0,"population":""};
  ajout:boolean=true;
  constructor( private paysService : PayService) { }

  ngOnInit(): void {
    this.chargerContinent();
  }
  continentsUpdated(cat : Continent){
    console.log("this si cat event handler ",cat);
    this.paysService.AddContinent(cat).subscribe( ()=> this.chargerContinent() )

  }
  chargerContinent() {
    this.paysService.listeContinent().subscribe(cats => {
      this.continents = cats._embedded.continents;
    })
  }
  continentsUpdateMethode(cat : Continent){
    this.updatedCont = cat;
    this.ajout=false;
  }

}
