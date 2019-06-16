import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CouponService } from '../coupon.service';
import { Coupon } from '../coupon';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  coupons: Coupon[];

  constructor(private _router: Router, private route: ActivatedRoute, private cs: CouponService) { }

  coupon = new Coupon(0, "", "", "","","","");

 resetForm(){
    this.coupon = new Coupon(0, "", "", "","","","");
  }
  ngOnInit() {
    this.getps();
    this.resetForm();
  }

  getps() {
    this.cs.getCoupons().subscribe(data => this.coupons = data);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.value.id == 0) {
      this.cs.addCoupon(this.coupon).subscribe();
      this.getps();
    }
    else {
      this.cs.updateCoupon(this.coupon).subscribe();
      this.getps(); 
    }
    this.resetForm();
  }

  onEdit(u: Coupon) {
    this.coupon = u;
  }

  deleteCoupon(id: String) {
    if (confirm("Are you sure to delete " + id)) {
      this.cs.delete(id).subscribe();
       this.getps();
       
    }
  }
 
}



