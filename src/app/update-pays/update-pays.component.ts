import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PayService } from "../services/pay.service";
import { Pays } from "../model/Pays.model";
import { Continent } from '../model/Continent.model';
@Component({
  selector: 'app-update-pays',
  templateUrl: './update-pays.component.html',
  styles: [
  ]
})
export class UpdatePaysComponent implements OnInit {
currentPays = new Pays();
continent! : Continent[];
updatedidCat! : number;
  constructor(private activatedRoute : ActivatedRoute,
    private router :Router,
    private paysService : PayService) { }
    updatePays(){
      
      this.currentPays.continent = this.continent.find(cat => cat.idCat == this.updatedidCat)!;

      this.paysService.updatePays(this.currentPays).subscribe(p => {
      this.router.navigate(['pays']);
      });
     
    }

  ngOnInit(): void {
   
   this.paysService.listeContinent().subscribe(cats => {
    this.continent = cats._embedded.continents;
    console.log(cats);
  });
  this.paysService.consulterPays(this.activatedRoute.snapshot.params['id']).subscribe(prod => {
    this.currentPays = prod;
  this.updatedidCat = this.currentPays.continent.idCat;
});

  }

}
