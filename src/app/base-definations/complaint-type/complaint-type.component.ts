import { Component, OnInit } from '@angular/core';
import { ComplaintType } from './complaint-type';
import { Router, ActivatedRoute } from '@angular/router';
 
import { NgForm } from '@angular/forms';
import { CompaintTypeService } from './compaint-type.service';

@Component({
  selector: 'app-complaint-type',
  templateUrl: './complaint-type.component.html',
  styleUrls: ['./complaint-type.component.css']
})
export class ComplaintTypeComponent implements OnInit {

  complaint_types: ComplaintType[];

  constructor(private _router: Router, private route: ActivatedRoute, private cts:CompaintTypeService) { }

  complaint_type = new ComplaintType(0, "", "","");

  importance = ["Low", "Medium", "High"];
  sender = ["Rider", "Driver"];
 resetForm(){
    this.complaint_type = new ComplaintType(0, "", "","");
  }
  ngOnInit() {
    this.getct();
    this.resetForm();
  }
 
  getct() {
    this.cts.getComplaintTypes().subscribe(data => this.complaint_types = data);
  }

   

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.value.id == 0) {
      this.cts.addComplaintType(this.complaint_type).subscribe();
      this.getct();
    }
    else {
      this.cts.updateComplaintType(this.complaint_type).subscribe();
      this.getct(); 
    }
    this.resetForm();
  }

  onEdit(u: ComplaintType) {
    this.complaint_type = u;
  }

  deleteComplaint(id: number) {
    if (confirm("Are you sure to delete " + id)) {
      this.cts.delete(id).subscribe();
       this.getct();    
    }
  }
}



