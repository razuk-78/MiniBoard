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
  constructor(private _httpClient:HttpClientService) {
  }


  ngOnInit() {
     this._httpClient.SetCurrentProject(this.ProjectIndex);
     this.ToDo = this._httpClient.CurrentProject.ToDo;
     this.Done = this._httpClient.CurrentProject.Done;
     this.InProgress = this._httpClient.CurrentProject.InProgress;
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
