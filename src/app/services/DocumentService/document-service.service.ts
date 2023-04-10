import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Document } from 'src/app/models/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService{
  

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

  public getAllDocuments(){
    return this.http.get<Document[]>("http://localhost:8080/Document",{headers: this.getHeaders()});
  }
  public deleteDocument(id: any) {
    return this.http.delete<Document[]>("http://localhost:8080/Document/"+id,{headers: this.getHeaders()});
  }
  postDocument(document: Document) {
    return this.http.post<Document[]>("http://localhost:8080/Document",document,{headers: this.getHeaders()});
  }
  public EditDocument(document:Document){
    return this.http.put<any>("http://localhost:8080/Document/"+document.Id,document,{headers: this.getHeaders()});
  }
 
}
