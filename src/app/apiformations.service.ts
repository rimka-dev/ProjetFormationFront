import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

}
