import { Component, OnInit } from '@angular/core';
import { Continent } from '../model/Continent.model';
import { Pays } from '../model/Pays.model';
import { PayService } from '../services/pay.service';

@Component({
  selector: 'app-recherche-par-continent',
  templateUrl: './recherche-par-continent.component.html',
  styles: [
  ]
})
export class RechercheParContinentComponent implements OnInit {
  IdCat! : number;
  continent!: Continent[];
  payes!: Pays[];

  constructor(private payesService : PayService) { }

  ngOnInit(): void {
    this.payesService.listeContinent().subscribe(cats =>{
      this.continent = cats._embedded.continents;
      console.log(cats);
    } );
  }
  onChange(){
    this.payesService.rechercherParContinent(this.IdCat).subscribe(po => {
      this.payes= po;
    })

  }

}
