import {Component} from '@angular/core';
import {TASKS} from './moc-tasks';
import {Task} from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tasks';
  tasks: string[] = TASKS;
  doneTasks: string[] = [];
  tasksLimit = 10;
  taskError = false;

  addTask(task: string): void {
    const tasks = this.tasks;
    if (task === '' || tasks.includes(task)) {
      this.taskError = true;
      return null;
    }
    if (tasks.length < this.tasksLimit) {
      this.taskError = false;
      tasks.unshift(task);
    }
  }

  removeAll(): void {
    this.tasks = [];
    this.doneTasks = [];
    this.taskError = false;
  }

  done(task: Task): string[] {
    if (!this.doneTasks.includes(task.value)) {
      this.doneTasks.unshift(task.value);
      return this.tasks = this.tasks.filter((item, index) => index !== task.position);
    }
  }

  remove(e: number): string[] {
    return this.tasks = this.tasks.filter((item, index) => index !== e);
  }

  removeDone(e: number): string[] {
    return this.doneTasks = this.doneTasks.filter((item, index) => index !== e);
  }
}
