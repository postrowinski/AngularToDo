import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.scss']
})

export class TodoTasksComponent {
  @Input() tasks;
  @Output() emitRemove = new EventEmitter<number>();
  @Output() emitDone = new EventEmitter<Object>();

  remove(i: number): void {
    this.emitRemove.emit(i);
  }

  done(task: string, i: number) {
    this.emitDone.emit({task: task, i: i});
  }

  addListItem(): string {
    return this.tasks.length > 3 ? 'list-group-item-danger' : 'list-group-item-success';
  }
}
