import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reviwer } from 'src/app/models/reviwer';

@Injectable({
  providedIn: 'root'
})
export class ReviwerService {
  

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

  public getAllReviwer(){
    return this.http.get<Reviwer[]>("http://localhost:8080/Reviwer",{headers: this.getHeaders()});
  }
  public postReviwer(reviwer: Reviwer) {
    console.log(reviwer)
    return this.http.post<Reviwer>("http://localhost:8080/Reviwer",reviwer,{headers: this.getHeaders()});
  }
  public deleteReviwer(id: any) {
    return this.http.delete<Reviwer[]>("http://localhost:8080/Reviwer/"+id,{headers: this.getHeaders()});
  }
  public EditReviwer(reviwer:Reviwer){
    return this.http.put<any>("http://localhost:8080/Reviwer/"+reviwer.Id,reviwer,{headers: this.getHeaders()});
  }
}
