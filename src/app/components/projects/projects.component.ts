import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/Services/http-client.service';
import { Project } from 'src/app/Models/project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private httpclient:HttpClientService) {


   }
  Projects:Array<Project>;
  ngOnInit() {
    this.Projects=this.httpclient.DataSet.Projects;
  }
  CopyTitle:string;
  CopyDescription:string;
  EditTask:boolean;
  CopyComment:string;
  EditComment:boolean;
  CommentIndex:number=-1;
  DeleteTask:boolean;
  OnEditTask(){

  }
  OnMoveTo(){
   
  }
  /*
  OnDeleteTask(){
    this._httpClient.DataSet.DeleteTask(this.task);
  }
  OnSaveTask(){
   this.task.Title = this.CopyTitle;
   this.task.Description = this.CopyDescription;
   this.EditTask=false
  }
  OnCollapseTask(){
   this.EditTask=false;
  }
  OnCancelTask():void{
   this.EditTask=false;
  }
 
  OnEditCommit(index:number){
   this.EditComment=true;
   this.CommentIndex = index;
   this.CopyComment=this.task.Comments[index];
  }
  OnSaveCommit(index:number){
  
  }
  OnCommentCollapse(){
   this.CommentIndex=-1;
   this.EditComment=false;
  }
  OnDeleteComment(index:number){
   this.task.Comments.splice(this.task.Comments.indexOf(this.task.Comments[index]),1);
  }*/
  

}
