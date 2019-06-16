export class Complaints {
    constructor(
        public id:number,
       public sender_type: String,
       public subject: String,
       public content: String,
       public title: String,
      public inscription_timestamp:String,
   ){}
}
