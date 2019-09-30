import { Component, OnInit, Input } from '@angular/core';
import { DataSet } from 'src/app/Models/data-set';
import { Progress } from 'src/app/Models/progress.enum';
import{NgModel} from "@angular/forms"
import { Task } from 'src/app/Models/task';
import { Project } from 'src/app/Models/project';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  testTaskList:Array<Task>;
  dataset:DataSet=new DataSet();
  progress:Array<any>;

  constructor() { 
  this.testTaskList = this.dataset.Projects[0].TaskList; 
  console.log(this.testTaskList);
  console.log("hello");
  }
  str:string;
  ngOnInit() {
  }
  ProgressToArray():Array<number>{
    let array=[];
    for(let m in Progress){
      
      if(isNaN(Number(m)) && m!="BackLog")
        array.push(m);
        
    }
    return array;
  }

}
