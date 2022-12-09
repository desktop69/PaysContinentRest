import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/Pays.model';
import { PayService } from '../services/pay.service';
import { Continent } from "../model/Continent.model";
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-pays',
  templateUrl: './add-pays.component.html'
})
export class AddPaysComponent implements OnInit {
  newPays = new Pays();
  continent! : Continent[];
  newidCat! : number;
  newContinent! : Continent;

  constructor(private payServices: PayService,
    private router : Router) {
    
   }

  ngOnInit(): void {
    this.payServices.listeContinent().subscribe(cats => {
      console.log(cats);
      this.continent = cats._embedded.continents;
    })
  }
 
  addPays (){
    this.newPays.continent = this.continent.find(cat => cat.idCat == this.newidCat)!;

    this.payServices.ajouterPays(this.newPays).subscribe(pay =>{
     console.log(pay);
     this.router.navigate(['pays']);
    })
  }
}
