import { Project } from './project';
import { Task } from './task';
import { Progress } from './progress.enum';

export class DataSet {

    Projects: Array<Project>;
    private _index: number;
    constructor() {
        this.Projects = new Array<Project>();
        this.fillProjects();
    }
    private fillProjects(): void {

    }
    setCurrentProject(index: number): void {
        this._index = index;
    }
    GetCurrentBackLog(): Task[] {
        return this.Projects[this._index].BackLog;
    }
    GetCurrentToDo(): Task[] {
        return this.Projects[this._index].ToDo;
    }
    GetCurrentInProgress(): Task[] {
        return this.Projects[this._index].InProgress;
    }
    GetCurrentDone(): Task[] {
        return this.Projects[this._index].Done;
    }
    DeleteTask(task: Task): void {
        this._splice(task);
    }
    MoveTaskTo(task:Task){
       
        if(this.GetCurrentBackLog().indexOf(task)<0){
            this.GetCurrentBackLog().push( this._splice(task)[0]);
        }else{
           
            this.GetCurrentToDo().push( this._splice(task)[0]);
        }
    }
    private _splice(task: Task): Task[] {
        let IndxT = this.GetCurrentToDo().indexOf(task);
        let IndxI = this.GetCurrentInProgress().indexOf(task);
        let IndxD = this.GetCurrentDone().indexOf(task);
        let IndxB = this.GetCurrentBackLog().indexOf(task);
        if (IndxT > -1) {
            return this.GetCurrentToDo().splice(IndxT, 1);

        }
        if (IndxD > -1) {
            return this.GetCurrentDone().splice(IndxD, 1);

        }
        if (IndxI > -1) {
            return this.GetCurrentInProgress().splice(IndxI, 1);

        }
        if (IndxB > -1) {
            return this.GetCurrentBackLog().splice(IndxB, 1);

        }
    }
}
