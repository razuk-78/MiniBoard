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

       
    }
}
