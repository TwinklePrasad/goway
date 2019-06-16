import { Component, OnInit } from '@angular/core';
import { Cars } from './cars';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CarsService } from './cars.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carss: Cars[];
  selectedFile:any;
  datas:any;
  fileuplode :any;
  constructor(private _router: Router, private route: ActivatedRoute, private ca: CarsService,private http:HttpClient) { }

  car = new Cars(0, "", "");

 resetForm(){
    this.car = new Cars(0, "", "");
  }
  ngOnInit() {
    this.getts();
    this.resetForm();
  }

  getts() {
    this.ca.getCars().subscribe(data => this.carss = data);
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
   
  
    if (form.value.id == 0) {
      this.http.post("http://localhost:3000/car",formData).subscribe((data:any)=>{
        console.log(this.datas );
        this.getts()
        
      })
    }
    else {
      this.http.put("http://localhost:3000/car",formData).subscribe((data:any)=>{
        this.datas = data;
        console.log(this.datas );
        
      })
    }
    this.resetForm();
  }

  onEdit(u: Cars) {

    this.car = u;
  }

  deleteCar(id: String) {
    if (confirm("Are you sure to delete " + id)) {
      this.ca.delete(id).subscribe();
       this.getts();
    }
  }

  selectImage(file: any){
    file.click();
  }

}


