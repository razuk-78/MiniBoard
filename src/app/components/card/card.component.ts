import { Component, OnInit, Input } from '@angular/core';
import{NgModel} from "@angular/forms"
import { Task } from 'src/app/Models/task';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 @Input() task:Task;
  constructor() {

   }

  ngOnInit() { 
  
  }

}
