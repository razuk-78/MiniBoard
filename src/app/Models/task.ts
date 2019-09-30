import { Item } from './item';
import { TaskType } from './task-type.enum';
import { Progress } from './progress.enum';

export class Task extends Item {
    constructor(_title:string){
       super(_title)
    this.Type=TaskType.Issue;
    this.Progress=Progress.BackLog;
    }
    Type:TaskType;
    Progress:Progress;
    
}

