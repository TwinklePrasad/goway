import { Component, OnInit } from '@angular/core';
import { RiderService } from 'src/app/riders/rider.service';
import { DriverService } from 'src/app/drivers/driver.service';
import { Rider } from 'src/app/riders/rider';
import { DriverClass } from 'src/app/drivers/driver-class';
 
 
 

@Component({
  selector: 'app-call-request',
  templateUrl: './call-request.component.html',
  styleUrls: ['./call-request.component.css']
})
export class CallRequestComponent implements OnInit {
  drs:DriverClass[];
  rds:Rider[];

  constructor(private rd:RiderService, private dr:DriverService) { }

  ngOnInit() {
  this.getDri();
  this.getRid();
  }

   getDri() {
    this.dr.getDrivers().subscribe(data => this.drs = data);
   }

  getRid() {
    this.rd.getRiders().subscribe(data => this.rds = data);
  }

}
