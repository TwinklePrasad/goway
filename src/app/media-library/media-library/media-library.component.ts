import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MediaLibrary } from '../media-library';
import { MediaLibraryService } from '../media-library.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-media-library',
  templateUrl: './media-library.component.html',
  styleUrls: ['./media-library.component.css']
})
export class MediaLibraryComponent implements OnInit {

  medias: MediaLibrary[];
  selectedFile:any;
  datas:any;
  fileuplode :any;
  constructor(private _router: Router, private route: ActivatedRoute, private ts: MediaLibraryService, private http:HttpClient) { }

  media = new MediaLibrary(0, "", "", "");

 resetForm(){
    this.media = new MediaLibrary(0, "", "", "");
  }
  ngOnInit() {
    this.getps();
    this.resetForm();
  }

  getps() {
    this.ts.getMedias().subscribe(data => this.medias = data);
  }

  public onFileChanged(event: any, imageLabel: any, fileIn: any) {
    this.selectedFile = <File>event.target.files[0]; 
   this.fileuplode = this.selectedFile.name

    imageLabel.value = fileIn.value.split('\\').pop();
  }


  onSubmit(form: NgForm) {
   
    let senddata = ({
     //id:form.value.id,
      title: form.value.title,
      address:this.selectedFile.name,
      type:form.value.type,
      
    })
    console.log(senddata);
    const formData =  new FormData();
    formData.append('title', form.value.title);
    formData.append('myFile', this.selectedFile, this.selectedFile.name);
    formData.append('type', form.value.type);
  
    if (form.value.id == 0) {
      this.http.post("http://localhost:3000/media",formData).subscribe((data:any)=>{
        console.log(this.datas );
        this.getps();
        
      })
    }
    else {
      this.http.put("http://localhost:3000/media",formData).subscribe((data:any)=>{
        this.datas = data;
        console.log(this.datas );
        
      })
         }
  
        }

  onEdit(u: MediaLibrary) {
    this.media = u;
  }

  deleteMedia(id: String) {
    if (confirm("Are you sure to delete " + id)) {
      this.ts.delete(id).subscribe();
       this.getps();
    }
  }

  selectImage(file: any){
    file.click();
  }


}
   


