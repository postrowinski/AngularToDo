import {Injectable} from '@angular/core';
import {TASKS} from './moc-tasks';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  private todoTasks: string[] = TASKS;

  private doneTasks: string[] = [];

  private taskError = false;

  private limit = 10;

  constructor() {}

  getDoneTasks(): Observable<string[]> {
    return of(this.doneTasks);
  }

  getTodoTasks(): Observable<string[]> {
    return of(this.todoTasks);
  }

  getTasksError(): Observable<boolean> {
    return of(this.taskError);
  }

  removeDone(i: number): Observable<string[]> {
    return of(this.doneTasks = this.doneTasks.filter((item, index) => index !== i));
  }

  removeTodo(i: number): Observable<string[]> {
    return of(this.todoTasks = this.todoTasks.filter((item, index) => index !== i));
  }

  doneTodo(task: string, position: number): Observable<string[]> {
    if (!this.doneTasks.includes(task)) {
      this.doneTasks.unshift(task);
      return of(this.todoTasks = this.todoTasks.filter((item, index) => index !== position));
    } else {
      return of(this.todoTasks);
    }
  }

  add(task: string): Observable<boolean> {
    const tasks = this.todoTasks;
    if (task === '' || tasks.includes(task)) {
      return of(this.taskError = true);
    }
    if (tasks.length < this.limit) {
      tasks.unshift(task);
      return of(this.taskError = false);
    }
  }

  clearAll(): void {
    this.todoTasks = [];
    this.doneTasks = [];
  }
}
