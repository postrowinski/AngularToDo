import { Component } from '@angular/core';
import { TASKS } from './moc-tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tasks';
  tasks: string[] = TASKS;
  doneTasks: string[] = [];

  addTask(task: string): void {
    this.tasks.push(task);
  }
  removeAll(): void {
    this.tasks = [];
    this.doneTasks = [];
  }

  done(e): string[] {
    this.doneTasks.push(e.task);
    return this.tasks = this.tasks.filter((item, index) => index !== e.i);
  }

  remove(e: number): string[] {
    return this.tasks = this.tasks.filter((item, index) => index !== e);
  }

  removeDone(e: number): string[] {
    return this.doneTasks = this.doneTasks.filter((item, index) => index !== e);
  }
}
