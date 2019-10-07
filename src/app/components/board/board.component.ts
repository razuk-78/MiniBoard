import { Component, OnInit, Input } from "@angular/core";
import { DataSet } from "src/app/Models/data-set";
import { Progress } from "src/app/Models/progress.enum";
import { NgModel } from "@angular/forms";
import { Task } from "src/app/Models/task";
import { Project } from "src/app/Models/project";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import * as $ from 'jquery';
import { HttpClientService } from 'src/app/Services/http-client.service';
import { ChildActivationStart } from '@angular/router';
@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent implements OnInit {
  @Input() ProjectIndex:number;
  progress: Array<any>;
  private _dataset:DataSet;
  Done:Task[];
  InProgress:Task[];
  ToDo:Task[];
  Projects:Array<Project>;
  Task:Task;
  Comment:string;
  constructor(private httpClient:HttpClientService) {



   console.log(httpClient.DataSet);
  }


  ngOnInit() {
     this.httpClient.SetCurrentProject(this.ProjectIndex);
     this.ToDo = this.httpClient.CurrentProject.ToDo;
     this.Done = this.httpClient.CurrentProject.Done;
     this.InProgress = this.httpClient.CurrentProject.InProgress;
      let  td:Task=new Task(this.ToDo[0].Title);
      td.Comments=this.ToDo[0].Comments;
      td.Description=this.ToDo[0].Description;
      td.Id = 10;
      this.ToDo.push(td);
  }

  SetProject(index:number){

  }
  viewEditor:boolean;
  OnViewEdit(task:Task){
    this.Task=task;
    this.viewEditor=true;
  }

  OnCancelEdit(val){
    this.viewEditor=val;
  }

  OnDelete(task:Task):void{

    let IndxT =this.ToDo.indexOf(task);
    let IndxI =this.InProgress.indexOf(task);
    let IndxD =this.Done.indexOf(task);
    
    if(IndxT >-1){
       this.ToDo.splice(IndxT,1);
       return;
    }
    if(IndxD >-1){
      this.Done.splice(IndxD,1);
      return;
   }
   if(IndxI>-1){
    this.InProgress.splice(IndxI,1);
    return;
  }
 }
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

    }
  }
}
