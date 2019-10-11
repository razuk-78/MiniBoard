import { Component,EventEmitter, OnInit,Input,Output,ViewChild } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Task } from "src/app/Models/task";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAccordion } from '@angular/material';
import { HttpClientService } from 'src/app/Services/http-client.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MailService } from 'src/app/Services/mail.service';
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit { 
 
  constructor(private _httpClient:HttpClientService, private _mail:MailService) {
    _httpClient.DataSet.setCurrentProject(0);
    
    
  }
  @ViewChild('taskCard', {static: false}) taskCard: MatAccordion;
   ngOnInit() {}
   @Output()Edit:EventEmitter<Task>=new EventEmitter<Task>();
   @Output()Delete:EventEmitter<Task>=new EventEmitter<Task>();
   @Output()Move:EventEmitter<Task>=new EventEmitter<Task>();
   @Input()task:Task;
   @Input()IsBacklog:boolean;
   OnEdit():void{
     
   }
   OnDelete():void{
    this.Delete.emit(this.task);
   }
   MoveTo():void{
     this.Move.emit(this.task);
   }
   CopyTitle:string;
   CopyDescription:string;
   EditTask:boolean;
   CopyComment:string;
   EditComment:boolean;
   CommentIndex:number=-1;
   DeleteTask:boolean;
   AddComment:boolean;
   IsFullScreen:boolean;
   OnEditTask(){
   this.taskCard.openAll();
   this.CopyTitle=this.task.Title;
   this.CopyDescription=this.task.Description;
   this.EditTask=true;
   this._mail.SendCommand("this.DisableDropList=true;");
   }
   OnMoveTo(){
    this._httpClient.DataSet.MoveTaskTo(this.task);
   }
   OnDeleteTask(){
     this._httpClient.DataSet.DeleteTask(this.task);
   }
   OnSaveTask(){
    this.task.Title = this.CopyTitle;
    this.task.Description = this.CopyDescription;
    this.EditTask=false
    this._mail.SendCommand("this.DisableDropList=false;");
   }
    OnCollapseTask(){
    this.EditTask=false;
   }
   OnCancelTask():void{
    this.EditTask=false;
    this._mail.SendCommand("this.DisableDropList=false;");
   }
  
   OnEditCommit(index:number){
    this.EditComment=true;
    this.CommentIndex = index;
    this.CopyComment=this.task.Comments[index];
  
   }
   OnSaveCommit(index:number){
    this.task.Comments[index] = this.CopyComment;
    this.EditComment=false;
   }
   OnCommentCollapse(){
    this.CommentIndex=-1;
    this.EditComment=false;
   }
   OnDeleteComment(index:number){
    this.task.Comments.splice(this.task.Comments.indexOf(this.task.Comments[index]),1);
   }
   OnSaveAddedComment(val){
    if(val)
    this.task.Comments.push(val);
    this.AddComment=false;
   }
  OnMaximize(){
    this.taskCard.openAll();
      this.IsFullScreen=true
      this._mail.SendCommand("this.DisableDropList=true;");
    
    
  }
  OnMinimize(){
    this.IsFullScreen=false
    this._mail.SendCommand("this.DisableDropList=false;");
  }
  
}
