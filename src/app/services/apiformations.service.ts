import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class ApiformationsService {
  private urlFormation: string = "http://localhost:8080/WS/formation";

  constructor(private http : HttpClient) {}
  getFormations(): Observable<any>{
    return this.http.get(this.urlFormation);
  }

  getFormationById(id:string){
    return this.http.get(this.urlFormation+"/"+id);
  }

  deleteFormationById(id:string){
    return this.http.delete(this.urlFormation+"/"+id);
  }

  addFormation(formation:Formation){
    let httpOptionsCreate = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Formation>(this.urlFormation,formation,httpOptionsCreate);
  }

  updateFormation(formation:Formation){
    let httpOptionsCreate = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Formation>(this.urlFormation,formation,httpOptionsCreate);
  }
}
