import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public basicUrl = "http://localhost:3000/api/v1/homes";
  constructor(public http:HttpClient) { }

  public handleError(err:HttpErrorResponse){
    console.log("Handler error Http calls");
    console.log('err.message');
    return Observable.throw(err.message);
  }

  public getAllHomes=():any=>{
    console.log(this.basicUrl);
    console.log("inside getAllHomes - bfore api call");

    console.log("get all homes");
    let myResponse=this.http.get(`${this.basicUrl}/all`).catch(this.handleError);
    console.log("My Response ---- ");
    console.log(myResponse);
    return myResponse;
  }

  public getSingleHomeView=(myHomeId)=>{
    const myResponse = this.http.get(`${this.basicUrl}/${myHomeId}/viewHomeById`).catch(this.handleError);
    console.log(myResponse);
    return myResponse;
  }

  public createHome=(homeData)=>{
    const myResponse=this.http.post(`${this.basicUrl}/create`, homeData);
    return myResponse;
  }

  public deleteHome=(homeId)=>{
    let data={};
    const myResponse=this.http.post(`${this.basicUrl}/${homeId}/delete`, data).catch(this.handleError);
    return myResponse;
  }

  public editThisHome=(homeId, homeData)=>{
    const myResponse = this.http.put(`${this.basicUrl}/${homeId}/edit`, homeData).catch(this.handleError);
    return myResponse;
  }
}
