import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parco } from './models/parco';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ParcoService {
    apiUrl="http://localhost:3000/parchi"
  constructor(private http:HttpClient ) { }
  getParchi():Observable<Parco[]>{
     return  this.http.get<Parco[]>(this.apiUrl);
  }
}
