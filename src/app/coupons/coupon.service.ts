import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from './coupon';
@Injectable({
  providedIn: 'root'
})
export class CouponService {
  coupon:Coupon[];
  constructor(private http:HttpClient) { }


  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
  

 private couponUrl = 'http://localhost:3000/coupon';
 

 /** GET Travel from the server */
 getCoupons(): Observable<Coupon[]> {
   return this.http.get<Coupon[]>(this.couponUrl, this.httpOptions)
 }

 
 getCoupon(id: String): Observable<Coupon> {
   const url = `${this.couponUrl}/${id}`;
   return this.http.get<Coupon>(url)
 }


 addCoupon(couponObj: Coupon): Observable<Coupon> {
   // console.log(driverObj);
   return this.http.post<Coupon>(this.couponUrl, couponObj, this.httpOptions)
 }


 public updateCoupon(couponObj: Coupon){
   console.log(couponObj);
   return this.http.put(`${this.couponUrl}/${couponObj.id}`, couponObj, this.httpOptions);
}


  //DELETE: delete the hero from the server

   
  delete(id: String): Observable<Coupon> {
    const url = `${this.couponUrl}/${id}`;
    return this.http.delete<Coupon>(url, this.httpOptions)
}
}

