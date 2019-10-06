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

  constructor(private httpClient: HttpClientService) {
    this.Item = this.InputItem;
    this.Sender = "Comment";
  }
  @Input() InputItem: any;
  @Output() CancelEditor: EventEmitter<boolean> = new EventEmitter<boolean>();
  Item: Item;
  Sender: string;
  Comment: string;
  Title: string;
  Description: string;
  ngOnInit() {
    let task = this.InputItem as Task;
    this.Title = task.Title;
    this.Description = task.Description;
    let comment = this.InputItem as string;
    this.Comment = comment;
  }
  OnSaveChanges() {
    this.httpClient.SaveChanges();
  }
  OnCancel() {
    this.CancelEditor.emit(false);
  }
}
