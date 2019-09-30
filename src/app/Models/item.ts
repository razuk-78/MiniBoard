export abstract class Item  {
    Id:number;
    Title:string;
    Desecription:string;
    readonly Started:Date;
    Comments:Array<string>;
    constructor(private title:string){
                this.Started=new Date();                           
    }
    
}
