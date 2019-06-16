import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
 
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
   user:User[];
   constructor(private http:HttpClient) { }


   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
   

  private userUrl = 'http://localhost:3000/user';
  
 
  /** GET Customeres from the server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl, this.httpOptions)
  }

  
  getUser(id: String): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url)
  }


  addUser(driverObj: User): Observable<User> {
    // console.log(driverObj);
    return this.http.post<User>(this.userUrl, driverObj, this.httpOptions)
  }


  public updateUser(customerObj: User){
    console.log(customerObj);
    return this.http.put(`${this.userUrl}/${customerObj.id}`, customerObj, this.httpOptions);
}


   //DELETE: delete the hero from the server

    
   delete(id: String): Observable<User> {
     const url = `${this.userUrl}/${id}`;
     return this.http.delete<User>(url, this.httpOptions)
 }
}
