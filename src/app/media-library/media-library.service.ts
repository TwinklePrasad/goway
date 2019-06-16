import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MediaLibrary } from './media-library';
@Injectable({
  providedIn: 'root'
})
export class MediaLibraryService {
  media:MediaLibrary[];

  image;
  constructor(private http:HttpClient) { }


  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
  

 private mediaUrl = 'http://localhost:3000/media';
 

 /** GET Travel from the server */
 getMedias(): Observable<MediaLibrary[]> {
   return this.http.get<MediaLibrary[]>(this.mediaUrl, this.httpOptions)
 }

 
 getMedia(id: String): Observable<MediaLibrary> {
   const url = `${this.mediaUrl}/${id}`;
   return this.http.get<MediaLibrary>(url)
 }


 addMedia(promotionObj: MediaLibrary): Observable<MediaLibrary> {
   // console.log(driverObj);
   return this.http.post<MediaLibrary>(this.mediaUrl, promotionObj, this.httpOptions)
 }


 public updateMedia(promotionObj: MediaLibrary){
   console.log(promotionObj);
   return this.http.put(`${this.mediaUrl}/${promotionObj.id}`, promotionObj, this.httpOptions);
}


  //DELETE: delete the hero from the server

   
  delete(id: String): Observable<MediaLibrary> {
    const url = `${this.mediaUrl}/${id}`;
    return this.http.delete<MediaLibrary>(url, this.httpOptions)
}

addImage(event)
{
    if(event.target.files && event.target.files.length>0)
    {
      this.image=event.target.files[0];
    }
}
}
