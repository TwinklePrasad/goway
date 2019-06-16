import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Travel } from './travel';
@Injectable({
  providedIn: 'root'
})
export class TravelService {
  travel:Travel[];
  constructor(private http:HttpClient) { }


  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
  

 private travelUrl = 'http://localhost:3000/travel';
 

 /** GET Travel from the server */
 getTravels(): Observable<Travel[]> {
   return this.http.get<Travel[]>(this.travelUrl, this.httpOptions)
 }

 
 getTravel(id: String): Observable<Travel> {
   const url = `${this.travelUrl}/${id}`;
   return this.http.get<Travel>(url)
 }


 addTravel(travelObj: Travel): Observable<Travel> {
   // console.log(driverObj);
   return this.http.post<Travel>(this.travelUrl, travelObj, this.httpOptions)
 }


 public updateTravel(travelObj: Travel){
   console.log(travelObj);
   return this.http.put(`${this.travelUrl}/${travelObj.id}`, travelObj, this.httpOptions);
}


  //DELETE: delete the hero from the server

   
  delete(id: String): Observable<Travel> {
    const url = `${this.travelUrl}/${id}`;
    return this.http.delete<Travel>(url, this.httpOptions)
}
}
