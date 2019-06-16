import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';

 

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
users:User[];


constructor(private _router:Router,private route:ActivatedRoute ,private  us:UserService) { }

user = new User(0,"","","","","","");
 
  resetForm(){
    this.user = new User(0,"","","","","","");
  }

  ngOnInit() {
    this.getUs();
    this.resetForm();
    
  }

   

  getUs() {
    this.us.getUsers().subscribe(data => this.users = data);
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    if(form.value.id == 0){
      this.us.addUser(this.user).subscribe();
      this.getUs();
    }
    else{
      this.us.updateUser(this.user).subscribe();
        this.getUs();
        
    }
    this.resetForm();
    
  }


  onEdit(u: User){
    this.user=u;
  }

  deleteUser(id: String) {
    if (confirm("Are you sure to delete " + id)) {
      this.us.delete(id).subscribe();
      this.getUs();
       
    }
  }

   
}
