import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentRequest } from './payment-request';
@Injectable({
  providedIn: 'root'
})
export class PaymentRequestService {
  payments:PaymentRequest[];
  constructor(private http:HttpClient) { }


  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
  

 private paymentUrl = 'http://localhost:3000/payment_request';
 

 /** GET Travel from the server */
 getPayments(): Observable<PaymentRequest[]> {
   return this.http.get<PaymentRequest[]>(this.paymentUrl, this.httpOptions)
 }
 
}
