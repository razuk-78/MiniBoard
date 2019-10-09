import { Injectable } from '@angular/core';
import { DataSet } from '../Models/data-set';
import { Project } from '../Models/project';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
}) 
export class HttpClientService {
  CurrentProject: Project;
  CurrentTask: Task;
  CurrentComment: string;
  DataSet: DataSet;
  constructor() {
   this.GetDataSet();
   console.log(this.DataSet);
  }
  GetDataSet(): DataSet {

    return this.fillDataSet();
  }
  LoadDataSetFromSever(): DataSet {

    return null;
  }
  SetCurrentProject(index:number):void{
   this.CurrentProject= this.DataSet.Projects[index];
  }
  GetCurrentProject(index: number): Project {
    return this.DataSet.Projects[index];
    
  }
  GetCurrentTask(index: number): Task {
    return null;
  }
  SetCurrentComment(index: number): void {
    this.CurrentComment = this.CurrentTask.Comments[index];
  }

  SaveChanges(): boolean {
    //todo:
    //serialize data
    return true;
  }
  //for test only
  private fillDataSet(): DataSet {
    this.DataSet = new DataSet();
    let ps:Array<Project>=new Array<Project>();

    for(let p=0;p<10;p++){
      let ts:Array<Task>=new Array<Task>();
      
      ps.push(new Project("project num: "+p));
      for(let t=0;t<10;t++ ){
        ts.push(new Task("task num: "+t));
        let cs:Array<string>=new Array<string>();
        for(let c=0;c<10;c++){
          cs.push("comment num: "+c);
        }
        ts[t].Comments=cs;
      }
      ps[p].BackLog=ts;
    }
     this.DataSet.Projects=ps;
    return this.DataSet;
  }
  private serializeDataSet(DataSet: DataSet): string {
    return null;
  }
  private deSerializeDataSet(json: string): DataSet {
    return null;
  }

}

