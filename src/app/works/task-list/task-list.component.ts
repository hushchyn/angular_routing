import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/shared/interfaces/task-list.interface';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public arrTask: Array<ITask>=[  
    { item: 'Angular', status: false },
    { item: 'HTML/CSS', status: true },
    { item: 'React', status: false }
  ]

  public taskCount: number = this.arrTask.length

  constructor() { }

  ngOnInit(): void {
  }

  title = 'homework3';
  public task!: string; 

  addTask():void{
    if(this.task){
    let sts = false
    let task = new TasksList(this.task, sts)
    this.arrTask.push(task)
    this.taskCount = this.arrTask.length
    this.task = ''
    }
  }

  getNewCount(count:number):void{
    this.taskCount = count
  }
}

export class TasksList implements ITask{
  item:string;
  status: false;
  constructor ( uTask: string, uStatus: false ){
    this.item = uTask
    this.status = uStatus;
  }

}



