import { Injectable } from '@angular/core';
import { DriverClass } from './driver-class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DriverService {
  driver:DriverClass[];
  constructor(private http:HttpClient) { }

   
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
   

  private driverUrl = 'http://localhost:3000/driver';
  
 
  /** GET Customeres from the server */
  getDrivers(): Observable<DriverClass[]> {
    return this.http.get<DriverClass[]>(this.driverUrl, this.httpOptions)
  }

/** GET Customer by id. Will 404 if id not found */
getDriver(id: String): Observable<DriverClass> {
  const url = `${this.driverUrl}/${id}`;
  return this.http.get<DriverClass>(url)
}


addDriver(driverObj: DriverClass): Observable<DriverClass> {
  console.log(driverObj);
  return this.http.post<DriverClass>(this.driverUrl, driverObj, this.httpOptions)
}


public updateDriver(driverObj:DriverClass){
  console.log(driverObj);
  return this.http.put(`${this.driverUrl}/${driverObj.id}`, driverObj, this.httpOptions);
}


 //DELETE: delete the hero from the server

  
 delete(id: String): Observable<DriverClass> {
   const url = `${this.driverUrl}/${id}`;
   return this.http.delete<DriverClass>(url, this.httpOptions)
}


}
       