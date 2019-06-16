import { Injectable } from '@angular/core';
import { Complaints } from './complaints';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {
  comp:Complaints[];
  constructor(private http:HttpClient) { }


  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
  

 private complaintUrl = 'http://localhost:3000/complaint';
 

 /** GET Travel from the server */
 getComplaints(): Observable<Complaints[]> {
   return this.http.get<Complaints[]>(this.complaintUrl, this.httpOptions)
 }
}
