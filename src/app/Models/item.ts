export abstract class Item  {
    Id:number;
    Title:string;
    Description:string;
    readonly Started:Date;
    Comments:Array<string>;
    constructor( _title:string){
                this.Started=new Date();
                this.Comments=new Array<string>();
                this.Title=_title;
                this.Description="";                   
    }
    
}
