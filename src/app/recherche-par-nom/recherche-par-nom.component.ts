import { Component, OnInit } from '@angular/core';
import { Continent } from '../model/Continent.model';
import { Pays } from '../model/Pays.model';
import { PayService } from '../services/pay.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {
  nomPay!: string;
  continent!: Continent[];
  payes!: Pays[];
  allpayes!: Pays[];
  searchTerm!: string;
  constructor(private payesService : PayService) { }

  ngOnInit(): void {
    this.payesService.ListPays().subscribe(prods => {
      console.log(prods);
      this.payes = prods;
      });
  }
  rechercherProds(){
    this.payesService.rechercherParNom(this.nomPay).subscribe(prods => {
      this.payes =prods;
      console.log(prods);
    });
  }
  onKeyUp(filterText : string){
    this.payes = this.allpayes.filter(item =>
    item.nomPay.toLowerCase().includes(filterText));
    }

}
