import { Component, OnInit } from '@angular/core';
import { Travel } from '../travel';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  travels: Travel[];

  constructor(private _router: Router, private route: ActivatedRoute, private ts: TravelService) { }

  travel = new Travel(0, "", "", "", "", "");

 resetForm(){
    this.travel = new Travel(0, "", "", "", "", "");
  }
  ngOnInit() {
    this.getts();
    this.resetForm();
  }

  getts() {
    this.ts.getTravels().subscribe(data => this.travels = data);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.value.id == 0) {
      this.ts.addTravel(this.travel).subscribe();
      this.getts();
    }
    else {
      this.ts.updateTravel(this.travel).subscribe();
      this.getts(); 
    }
    this.resetForm();
  }

  onEdit(u: Travel) {

    this.travel = u;
  }

  deleteTravel(id: String) {
    if (confirm("Are you sure to delete " + id)) {
      this.ts.delete(id).subscribe();
       this.getts();
    }
  }
}

