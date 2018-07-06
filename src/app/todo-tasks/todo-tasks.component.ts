import {Component, DoCheck, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})

export class TodoTasksComponent implements OnInit, DoCheck {
  tasks: string[];

  todoTasks: string[];

  limit = 10;

  constructor(public tasksService: TasksService) { }

  ngOnInit() {
    this.getTodoTasks();
    this.getDoneTasks();
  }

  ngDoCheck() {
    this.getTodoTasks();
    this.getDoneTasks();
  }

  getTodoTasks() {
    this.tasksService.getTodoTasks().subscribe(data => this.tasks = data);
  }

  getDoneTasks() {
    this.tasksService.getDoneTasks().subscribe(data => this.todoTasks = data);
  }

  remove(i: number): void {
    this.tasksService.removeTodo(i).subscribe(data => this.tasks = data);
  }

  doneTodo(task: string, i: number): void {
    this.tasksService.doneTodo(task, i).subscribe(data => this.tasks = data);
  }

  addListItem(): string {
    return this.tasks.length > 3 ? 'list-group-item-danger' : 'list-group-item-success';
  }

  progressWidth(): string {
    return `${this.tasks.length * 10}%`;
  }
}
