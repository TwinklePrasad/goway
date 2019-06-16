import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from '../complaints.service';
import { Complaints } from '../complaints';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
comp:Complaints[];
  constructor(private cs:ComplaintsService) { }

  ngOnInit() {
    this.getPs();
  }
  getPs() {
    this.cs.getComplaints().subscribe(data => this.comp = data);
  }
}
