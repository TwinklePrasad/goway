import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cars } from './cars';
@Injectable({
  providedIn: 'root'
})
export class CarsService {

  car:Cars[];
  constructor(private http:HttpClient) { }


  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
  

 private carUrl = 'http://localhost:3000/car';
 

 /** GET Travel from the server */
 getCars(): Observable<Cars[]> {
   return this.http.get<Cars[]>(this.carUrl, this.httpOptions)
 }

 
 getCar(id: String): Observable<Cars> {
   const url = `${this.carUrl}/${id}`;
   return this.http.get<Cars>(url)
 }


 addCar(carObj: Cars): Observable<Cars> {
   // console.log(driverObj);
   return this.http.post<Cars>(this.carUrl, carObj, this.httpOptions)
 }


 public updateCar(carObj: Cars){
   console.log(carObj);
   return this.http.put(`${this.carUrl}/${carObj.id}`, carObj, this.httpOptions);
}


  //DELETE: delete the hero from the server

   
  delete(id: String): Observable<Cars> {
    const url = `${this.carUrl}/${id}`;
    return this.http.delete<Cars>(url, this.httpOptions)
}
}

