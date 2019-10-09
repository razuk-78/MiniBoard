import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../Models/item';
import { HttpClientService } from '../Services/http-client.service';
import { Task } from '../Models/task';
import { Project } from '../Models/project';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private _httpClient: HttpClientService) {
  }
  @Input()ObjectType:string;
  @Output() CancelEditor: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() Save:EventEmitter<void> = new EventEmitter<void>();
  Sender: string;
  Comment: string;
  Title: string;
  Description: string;
  ngOnInit() {
 
  }

  OnCancel() {
    this.CancelEditor.emit(false);
  }
  OnSave(){
   if(this.ObjectType=="task"){
     let t= new Task(this.Title);
     t.Description=this.Description;
    this._httpClient.DataSet.GetCurrentBackLog().push(t);
    this.Title="";
    this.Description="";
    this.Save.emit();
}
    if(this.ObjectType=="project"){
      let t= new Project(this.Title);
      t.Description=this.Description;
     this._httpClient.DataSet.Projects.push(t);
}
  }
}
