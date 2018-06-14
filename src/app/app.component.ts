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

  addTask(task: string): void {
    this.tasks.push(task);
  }
  removeAll(e: string[]): void {
    this.tasks = [];
  }

  remove(e: number): string[] {
    return this.tasks = this.tasks.filter((item, index) => index !== e);
  }
}
