import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../Models/item';
import { HttpClientService } from '../Services/http-client.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  
  constructor(private httpClient: HttpClientService) {
    this.Item = this.InputItem;
    this.Sender="Comment";
  }
  @Input() InputItem:any;
  Item: Item;
  Sender:string;
  Comment:string;
  Title:string;
  Description:string;
  ngOnInit() {

  }
  OnSaveChanges() {
    this.httpClient.SaveChanges();
  }
  OnCancel() {

  }
}
