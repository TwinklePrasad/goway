import { Component, OnInit } from '@angular/core';
import { Rider } from '../rider';
import { Router, ActivatedRoute } from '@angular/router';
import { RiderService } from '../rider.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.css']
})
export class RidersComponent implements OnInit {
  riders: Rider[];

  constructor(private _router: Router, private route: ActivatedRoute, private rs: RiderService) { }

  rider = new Rider(0, "", "", "", "", "");

  resetForm(){
    this.rider = new Rider(0, "", "", "", "", "");
  }

  ngOnInit() {
    this.getrs();
    this.resetForm();
  }

  getrs() {
    this.rs.getRiders().subscribe(data => this.riders = data);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.value.id == 0) {
      this.rs.addRider(this.rider).subscribe();
      this.getrs();
      
    }
    else {
      this.rs.updateRider(this.rider).subscribe();
      this.getrs();
       
    }
    this.resetForm();
  }

  onEdit(u: Rider) {

    this.rider = u;
  }
}

