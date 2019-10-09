import { Injectable,HostListener } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class KeyWordService {

  constructor() { 
    console.log("iam alive");
    
    window.addEventListener('keydown',(event)=>{
      
      
      switch(event.code){
       case "ControlLeft":
         event.stopPropagation();
         event.preventDefault();
           this._hasCtrl=true;
         break;
         case "KeyI":
            if(this._hasCtrl){
              event.stopPropagation();
              event.preventDefault();
             }
           this._hasI=true;
         break;
         
         case "KeyP":
           if(this._hasCtrl){
            event.stopPropagation();
            event.preventDefault();
           }
           
           this._hasP=true;
         break;
           case "KeyC":
              if(this._hasCtrl){
                event.stopPropagation();
                event.preventDefault();
               }
             this._hasCancel=true;
           break;
      }
         
    });
    window.addEventListener('keyup',(event)=>{
     // event.stopPropagation();
      //event.preventDefault();
      switch(event.code){
       case "ControlLeft":
         
           this._hasCtrl=false;
         break;
         case "KeyI":
           this._hasI=false;
           if(this._hasCtrl)
           this._subject.next("addtask");
         break;
         case "KeyP":
           this._hasP=false;
           if(this._hasCtrl)
           this._subject.next("addproject");
         break;
           case "KeyC":
             this._hasCancel=false;
             if(this._hasCtrl)
             this._subject.next("addcancel");
           break;
      }
           
    });
    
  }
 private _subject:Subject<string> = new Subject<string>();
 private _hasI:boolean;
 private _hasP:boolean;
 private _hasCtrl:boolean;
 private _hasCancel:boolean;
    getMessage(): Observable<any> {
      return this._subject.asObservable();
  }
  private _setAllKeysToFalse(){
   this._hasCancel=false;
   this._hasI=false;
   this._hasP=false;
  }
}
