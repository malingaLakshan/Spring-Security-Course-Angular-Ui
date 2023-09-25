import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = "http://localhost:8083";

  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );
  constructor(private httpClient:HttpClient) { }

  public login(loginData:any){
    return this.httpClient.post(this.BASE_URL+"/authentication",loginData,{headers: this.requestHeader})
  }
}
