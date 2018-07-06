import {Component, OnInit} from '@angular/core';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  errorMsg = 'Pole nie może się powtarzać lub być pustę';

  task = '';

  taskError: boolean;

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.getTaskError();
  }

  add(task: string = ''): void {
    this.tasksService.add(task);
    this.task = '';
    this.getTaskError();
  }

  clearAll() {
    this.taskError = false;
    this.task = '';
    this.tasksService.clearAll();
  }

  getTaskError() {
    this.tasksService.getTasksError().subscribe(data => this.taskError = data);
  }
}
