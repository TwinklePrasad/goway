import { Injectable } from '@angular/core';
import { ComplaintType } from './complaint-type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompaintTypeService {
  complaint_type:ComplaintType[];
  constructor(private http:HttpClient) { }


  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
  

 private complaintUrl = 'http://localhost:3000/complaint-type';
 

 /** GET Travel from the server */
 getComplaintTypes(): Observable<ComplaintType[]> {
   return this.http.get<ComplaintType[]>(this.complaintUrl, this.httpOptions)
 }

 
 getComplaintType(id: String): Observable<ComplaintType> {
   const url = `${this.complaintUrl}/${id}`;
   return this.http.get<ComplaintType>(url)
 }


 addComplaintType(complaintObj: ComplaintType): Observable<ComplaintType> {
   // console.log(driverObj);
   return this.http.post<ComplaintType>(this.complaintUrl, complaintObj, this.httpOptions)
 }


 public updateComplaintType(complaintObj: ComplaintType){
   console.log(complaintObj);
   return this.http.put(`${this.complaintUrl}/${complaintObj.id}`, complaintObj, this.httpOptions);
}


  //DELETE: delete the hero from the server

   
  delete(id: number): Observable<ComplaintType> {
    const url = `${this.complaintUrl}/${id}`;
    return this.http.delete<ComplaintType>(url, this.httpOptions)
}
}
