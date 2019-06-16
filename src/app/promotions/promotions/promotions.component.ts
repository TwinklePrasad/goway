import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion';
import { Router, ActivatedRoute } from '@angular/router';
import { PromotionService } from '../promotion.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  promotions: Promotion[];

  constructor(private _router: Router, private route: ActivatedRoute, private ts: PromotionService) { }

  promotion = new Promotion(0, "", "", "");

 resetForm(){
    this.promotion = new Promotion(0, "", "", "");
  }
  ngOnInit() {
    this.getps();
    this.resetForm();
  }

  getps() {
    this.ts.getPromotions().subscribe(data => this.promotions = data);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.value.id == 0) {
      this.ts.addPromotion(this.promotion).subscribe();
      this.getps();
    }
    else {
      this.ts.updatePromotion(this.promotion).subscribe();
      this.getps(); 
    }
    this.resetForm();
  }

  onEdit(u: Promotion) {
    this.promotion = u;
  }

  deletePromotion(id: String) {
    if (confirm("Are you sure to delete " + id)) {
      this.ts.delete(id).subscribe();
       this.getps();
    }
  }
}


