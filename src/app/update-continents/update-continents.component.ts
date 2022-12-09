import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Continent } from '../model/Continent.model';

@Component({
  selector: 'app-update-continents',
  templateUrl: './update-continents.component.html',
  styles: [
  ]
})
export class UpdateContinentsComponent implements OnInit {
  @Input()
  continentss! : Continent;
 
  @Input()
  ajout!:boolean;

  @Output()
  continentsUpdated = new EventEmitter<Continent>();
  

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateCategorie ",this.continentss);
  }

  saveContinents(){
    this.continentsUpdated.emit(this.continentss);
  }

}
