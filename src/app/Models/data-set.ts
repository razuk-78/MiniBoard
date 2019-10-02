import { Project } from './project';
import { Task } from './task';
import { Progress } from './progress.enum';

export class DataSet {
    Projects: Array<Project>;
    constructor() {
        this.Projects = new Array<Project>();
        this.fillProjects();
    }
    private fillProjects(): void {
        let p1 = new Project("some project");
       
        let t1 = new Task("solve some thing");    
        t1.Comments.push("some comment");
        t1.Comments.push("some comment");
        t1.Description="some Description to ";
        let t2 = new Task("solve some thing");
        t2.Comments.push("some comment");
        t2.Comments.push("some comment");
        p1.BackLog.push(t1);p1.ToDo.push(t1);
        p1.InProgress.push(t2);p1.Done.push(t2);
        this.Projects.push(p1);
       
    }
}
