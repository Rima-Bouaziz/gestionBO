import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etat } from 'src/app/models/etat';

@Injectable({
  providedIn: 'root'
})
export class EtatService {
  [x: string]: any;
 
  
 
 
  constructor(private http:HttpClient) { }
  public getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });
    return headers;
  }

  public getAllEtats(){
    return this.http.get<Etat[]>("http://localhost:8080/Etat",{headers: this.getHeaders()});
  }
  public postEtat(etat: Etat) {
    return this.http.post<Etat>("http://localhost:8080/Etat",etat,{headers: this.getHeaders()});
  }
  public deleteEtat(id: number) {
    return this.http.delete<any>("http://localhost:8080/Etat/"+id,{headers: this.getHeaders()});
  }
  public EditEtat(etat:Etat){
    return this.http.put<any>("http://localhost:8080/Etat/"+etat.id,etat,{headers: this.getHeaders()});
  }
}
