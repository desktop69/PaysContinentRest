import { Injectable } from '@angular/core';
import { Continent } from '../model/Continent.model';
import { Pays } from '../model/Pays.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContinentWrapper } from '../model/ContinentWrapper.model';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )};
@Injectable({
  providedIn: 'root'
})
export class PayService {
  pays: Pays[];
  Pay!: Pays;
  apiURL: string = 'http://localhost:8090/pays/api';
  apiURLCat: string = 'http://localhost:8090/pays/cat';
  
  constructor(private http : HttpClient) {
    

    this.pays = [];
  }
  ListPays(): Observable<Pays[]> {
    return this.http.get<Pays[]>(this.apiURL);
  }

  ajouterPays(pay: Pays):Observable<Pays> {
    return this.http.post<Pays>(this.apiURL, pay, httpOptions);
  }
  supprimerPays(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  consulterPays(id: number): Observable<Pays> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Pays>(url);
  }
  updatePays(p: Pays) : Observable<Pays>{
   return this.http.put<Pays>(this.apiURL, p, httpOptions);
  }
  listeContinent():Observable<ContinentWrapper>{
    return this.http.get<ContinentWrapper>(this.apiURLCat);
    }

  rechercherParContinent(idCat: number): Observable<Pays[]> {
    const url = `${this.apiURL}/paycont/${idCat}`;
    return this.http.get<Pays[]>(url);
  }
  rechercherParNom(nom: string):Observable< Pays[]> {
    const url = `${this.apiURL}/paysByName/${nom}`;
    return this.http.get<Pays[]>(url);
    }
    AddContinent( cat: Continent):Observable<Continent>{
      return this.http.post<Continent>(this.apiURLCat, cat, httpOptions);
      }
}
