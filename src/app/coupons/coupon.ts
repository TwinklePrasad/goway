export class Coupon {
    constructor(
         
        public id:number,
        public title: String,
        public code: String,
        public discount_percent:String,
        public discount_flat: String,
        public start_at:String,
        public expiration_at:String
        
    ){}
}
