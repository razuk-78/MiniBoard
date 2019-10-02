import { Component, OnInit, Input, HostListener } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Task } from "src/app/Models/task";
import * as $ from 'jquery';
let isMouseDown=false;
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() task: Task;
  
 
  constructor() {
 
  }

  ngOnInit() {}

  @HostListener("mousedown", ["$event"])
  private onMousedown(btn) {

  }
}
