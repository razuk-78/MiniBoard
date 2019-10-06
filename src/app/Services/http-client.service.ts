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
    let p1 = new Project("some project");
    let t1 = new Task("solve some thing todo");
    t1.Comments.push("some comment");
    t1.Comments.push("some comment");
    t1.Description = "some Description to ";
    let t2 = new Task("solve some thing progress");
    let t3 = new Task("solve some thing done");
    t2.Comments.push("some comment");
    t2.Comments.push("some comment");
    p1.BackLog.push(t1);
    p1.ToDo.push(t1);
    p1.InProgress.push(t2);
    p1.Done.push(t3);
    this.DataSet.Projects.push(p1);
    return this.DataSet;
  }
  private serializeDataSet(DataSet: DataSet): string {
    return null;
  }
  private deSerializeDataSet(json: string): DataSet {
    return null;
  }

}

