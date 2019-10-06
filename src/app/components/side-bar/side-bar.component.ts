import { Component, OnInit } from '@angular/core';
import { transition, trigger, state, style, animate } from '@angular/animations';

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

  constructor() { }

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
}
