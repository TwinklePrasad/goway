import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rider } from './rider';
@Injectable({
  providedIn: 'root'
})
export class RiderService {
  rider:Rider[];
  constructor(private http:HttpClient) { }


  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
  

 private riderlUrl = 'http://localhost:3000/rider';
 

 /** GET Rider from the server */
 getRiders(): Observable<Rider[]> {
   return this.http.get<Rider[]>(this.riderlUrl, this.httpOptions)
 }

 
 getRider(id: String): Observable<Rider> {
   const url = `${this.riderlUrl}/${id}`;
   return this.http.get<Rider>(url)
 }


 addRider(riderObj: Rider): Observable<Rider> {
   // console.log(driverObj);
   return this.http.post<Rider>(this.riderlUrl, riderObj, this.httpOptions)
 }


 public updateRider(riderObj: Rider){
   console.log(riderObj);
   return this.http.put(`${this.riderlUrl}/${riderObj.id}`, riderObj, this.httpOptions);
}


  
}

