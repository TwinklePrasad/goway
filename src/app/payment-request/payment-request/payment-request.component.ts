import { Component, OnInit } from '@angular/core';
import { PaymentRequestService } from '../payment-request.service';
import { PaymentRequest } from '../payment-request';
@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html',
  styleUrls: ['./payment-request.component.css']
})
export class PaymentRequestComponent implements OnInit {
  payments:PaymentRequest[];
  constructor(private py:PaymentRequestService) { }

  ngOnInit() {
    this.getPay();
  }


getPay() {
    this.py.getPayments().subscribe(data => this.payments = data);
  }

}
