import { Component, OnInit } from '@angular/core';
import { transition, trigger, state, style, animate } from '@angular/animations';
import { HttpClientService } from 'src/app/Services/http-client.service';
import { Task } from 'src/app/Models/task';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { KeyWordService } from 'src/app/Services/key-word.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations:[
    trigger('openCloseLeft', [
      // ...
      state('open', style({
        width: '20%'
      })),
      transition('* <=> open', [
        animate('400ms')
      ]),
    ]),
    trigger('openCloseRight', [
      // ...
      state('open', style({
        width: '80%',
        left:'20%'
      })),
      transition('* <=> open', [
        animate('400ms')
      ]),
   
    ]),
  ]
})
export class SideBarComponent implements OnInit {
  BackLogTaskes:Task[];
  BackLogTask:Task;
  ShowEditor:boolean;
   private _subscribtion:Subscription;
   constructor(private _httClient:HttpClientService, private _keyword:KeyWordService) { 
   this.BackLogTaskes= _httClient.GetCurrentProject(0).BackLog;
   this._subscribtion=  _keyword.getMessage().subscribe((event)=>{this.OnKeyWord(event)});
  }
  
  ngOnInit() {
  }
  Isopen:boolean=false;
   Slide():void{
     
   if(!this.Isopen)
     this.Isopen=true;
     else{
       this.Isopen=false;
     }
   }
   OnAddNewTask(){
    this.ShowEditor=true;
   }
   OnSaveEditor(){
    this.ShowEditor=false;
   }
   OnCancelEditor(){
    this.ShowEditor=false;
   }
   drop(event){
    moveItemInArray(this.BackLogTaskes, event.previousIndex, event.currentIndex);
   }
  OnKeyWord(msg:string){  
  switch(msg){
    case "addtask":
    this.OnAddNewTask();
    break;
    case "addcancel":
      this.OnCancelEditor();
    break;
  }

  }
}
