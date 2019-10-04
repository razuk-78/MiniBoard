import { Component,EventEmitter, OnInit,Input,Output } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Task } from "src/app/Models/task";
import * as $ from 'jquery';
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit { 
 
  constructor() {
 
  }
   ngOnInit() {}
   @Output()Edit:EventEmitter<Task>=new EventEmitter<Task>();
   @Output()Delete:EventEmitter<Task>=new EventEmitter<Task>();
   @Input()task:Task;
   OnEdit():void{
    this.Edit.emit(this.task);
   }
   OnDelete():void{
    this.Delete.emit(this.task);
   }

}
