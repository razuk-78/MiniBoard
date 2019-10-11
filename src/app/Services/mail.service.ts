import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() { }
 private  _subject:Subject<string>= new Subject<string>();

  SendCommand(msg:string):void{
    this._subject.next(msg);
  }
  GetRecieve():Observable<string>{
    return this._subject.asObservable();
  }
}
