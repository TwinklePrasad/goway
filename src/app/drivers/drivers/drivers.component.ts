import { Component, OnInit } from '@angular/core';
 
import { ActivatedRoute, Router } from '@angular/router';
import { DriverService } from '../driver.service';
import { DriverClass } from '../driver-class';
import { NgForm } from '@angular/forms';
import { Cars } from 'src/app/base-definations/cars/cars';
import { CarsService } from 'src/app/base-definations/cars/cars.service';
import { User } from 'src/app/settings/user-settings/user';
import { UserService } from 'src/app/settings/user-settings/user.service';
 

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  drivers:DriverClass[];
  carss:Cars[];
  users:User[];
driver = new DriverClass(0,0,0,"","","","","","","","","");
resetForm(){
  this.driver = new DriverClass(0,0,0,"","","","","","","","","");
}
constructor(private _router:Router,private route:ActivatedRoute ,private ds:DriverService,private cs:CarsService,private us:UserService) { }

  ngOnInit() {
    this.getDri();
    this.getCa();
    this. getUs();
   this.resetForm();
  }
  getDri() {
    this.ds.getDrivers().subscribe(data => this.drivers = data);
  }
 

  getCa() {
    this.cs.getCars().subscribe(data => this.carss = data);
  }


  getUs() {
    this.us.getUsers().subscribe(data => this.users = data);
  }


  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.value.id == 0) {
      this.ds.addDriver(this.driver).subscribe();
      this.getDri();
    }
    else {
      this.ds.updateDriver(this.driver).subscribe();
      this.getDri(); 
    }
    this.resetForm();
  }

  onEdit(u: DriverClass) {

    this.driver= u;
  }

  deleteDriver(id: String) {
    if (confirm("Are you sure to delete " + id)) {
      this.ds.delete(id).subscribe();
       this.getDri();
    }
  }
}
