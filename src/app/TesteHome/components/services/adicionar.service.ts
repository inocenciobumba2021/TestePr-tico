import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { AddDoctores } from '../models/AddDoctores';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdicionarService {

  apiurl="http://localhost:3000/AddDoctores";


  constructor(private http:HttpClient) { }


  PegatodosDoctores(){
    return this.http.get<any>("http://localhost:3000/AddDoctores")
    .pipe (map((res:any)=>{
      return res;
    }))
  }
  
  CadastrarDoctores(data:AddDoctores){
    return this.http.post<AddDoctores>("http://localhost:3000/AddDoctores",data);
  }
}