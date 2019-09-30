import { Project } from './project';
import { Task } from './task';
import { Progress } from './progress.enum';

export class DataSet {
    Projects: Array<Project>;
    constructor() {
        this.Projects = new Array<Project>();
    }
    private fillProjects(): void {
        let p1 = new Project("some project");
        let p2 = new Project("some project");
        let t1 = new Task("solve some thing");
        t1.Comments.push("some comment");
        t1.Comments.push("some comment");

        t1.Progress = Progress.BackLog;
        let t2 = new Task("solve some thing");
        t2.Comments.push("some comment");
        t2.Comments.push("some comment");
        t2.Progress = Progress.ToDo;
        this.Projects.push(p1);
        this.Projects.push(p2);
    }
}
