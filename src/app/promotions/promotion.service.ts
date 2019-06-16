import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promotion } from './promotion';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  promotion:Promotion[];
  constructor(private http:HttpClient) { }


  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
  

 private promotionUrl = 'http://localhost:3000/promotion';
 

 /** GET Travel from the server */
 getPromotions(): Observable<Promotion[]> {
   return this.http.get<Promotion[]>(this.promotionUrl, this.httpOptions)
 }

 
 getPromotion(id: String): Observable<Promotion> {
   const url = `${this.promotionUrl}/${id}`;
   return this.http.get<Promotion>(url)
 }


 addPromotion(promotionObj: Promotion): Observable<Promotion> {
   // console.log(driverObj);
   return this.http.post<Promotion>(this.promotionUrl, promotionObj, this.httpOptions)
 }


 public updatePromotion(promotionObj: Promotion){
   console.log(promotionObj);
   return this.http.put(`${this.promotionUrl}/${promotionObj.id}`, promotionObj, this.httpOptions);
}


  //DELETE: delete the hero from the server

   
  delete(id: String): Observable<Promotion> {
    const url = `${this.promotionUrl}/${id}`;
    return this.http.delete<Promotion>(url, this.httpOptions)
}
}
