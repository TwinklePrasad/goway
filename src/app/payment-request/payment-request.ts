export class PaymentRequest {
    constructor(
         
        public id:number,
        public first_name: String,
        public last_name: String,
        public mobile_number:String,
        public request_timestamp:String,
        public payment_timestamp:String,
        public amount:String,
        public account_number:String,
        public comment:String,
       
    ){}
}
