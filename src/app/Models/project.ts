import { Item } from './item';
import { Task } from './task';

export class Project extends Item{
      constructor(private _title:string){
             super(_title);
             this.TaskList=new Array<Task>();
             
      }
      TaskList:Array<Task>;
}
