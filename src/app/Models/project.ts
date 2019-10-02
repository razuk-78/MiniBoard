import { Item } from './item';
import { Task } from './task';

export class Project extends Item{
      constructor(_title:string){
             super(_title);
             this.BackLog=new Array<Task>();
             this.ToDo=new Array<Task>();
             this.InProgress=new Array<Task>();
             this.Done=new Array<Task>();
             
      }
      BackLog:Array<Task>;
      ToDo:Array<Task>;
      InProgress:Array<Task>;
      Done:Array<Task>;

}
