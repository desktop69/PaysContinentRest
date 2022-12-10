import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/Pays.model';
import { PayService } from '../services/pay.service';
//import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html'
})
export class PaysComponent implements OnInit {
  pays?: Pays[];
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  constructor(private payServices: PayService) {


  }

  supprimerPay(p: Pays) {
    // console.log(p);
    let conf = confirm(" Etes-vous sure ?");
    if (conf)
      this.payServices.supprimerPays(p.idPay).subscribe( ()=>{
        console.log("pays supprimé");
        this.chargerPays();
      })

  }
  chargerPays(){
    this.payServices.ListPays().subscribe(pay => {
      console.log(pay);
      this.pays = pay;
    })
  }
  ngOnInit(): void {
    this.chargerPays();

  }

}
