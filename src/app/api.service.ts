import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { datamodels } from './list/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiurl = 'http://localhost:3000/posts';


  constructor(private http:HttpClient) { }

    addemployee(data:datamodels){
      return this.http.post<datamodels>("http://localhost:3000/posts",data);
    }
    getemployee(){
      return this.http.get<datamodels[]>("http://localhost:3000/posts");
    }
    delete(id:any){
      return this.http.delete(this.apiurl+'/'+id);
    }
    fetchdata(id:number){
      return this.http.get<datamodels>("http://localhost:3000/posts/"+id);
    }
    atualizaemployee(data:datamodels,id:number){
      return this.http.put<datamodels>("http://localhost:3000/posts/"+id,data);
    }
  }

