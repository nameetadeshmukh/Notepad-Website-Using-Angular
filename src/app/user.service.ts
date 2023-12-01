import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/people/"
  getUser(){
    return this.http.get(this.url);
  }
  saveUser(data:any)
  {
    return this.http.post(this.url,data);
  }

  deleteUser(id:any)
  {
    return this.http.delete(this.url+id);
  }

  updateUser(id:any,data:any)
  {
    return this.http.put(this.url+id,data);
  }
}
