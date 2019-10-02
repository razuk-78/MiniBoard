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
@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent implements OnInit {
  dataset: DataSet = new DataSet();
  progress: Array<any>;

  constructor() {}
  str: string;
  ngOnInit() {}
  Done = this.dataset.Projects[0].Done;
  InProgress = this.dataset.Projects[0].InProgress;
  ToDo = this.dataset.Projects[0].ToDo;
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
      console.log(this.dataset.Projects[0].ToDo);
    }
  }
}
