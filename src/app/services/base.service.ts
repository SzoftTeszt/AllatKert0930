import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private url="http://localhost:3000/"
  constructor(private http:HttpClient ) { }

  getData(target:string){
    return this.http.get(this.url+target)
  }

  getAnimal(id:any){
    return this.http.get(this.url+"allatok/"+id)
  }
  

  newAnimal(body:any){
    console.log("id", body.id)
    console.log("id log:", Boolean(body.id))
    if (body.id!=undefined) return this.http.put(this.url+"allatok/"+body.id,body)
    return this.http.post(this.url+"allatok",body)
  }

  deleteAnimal(body:any){
    return this.http.delete(this.url+"allatok/"+body.id)
  }
}
