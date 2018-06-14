import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.scss']
})

export class TodoTasksComponent {
  @Input() tasks;
  @Output() emitTodoTasks = new EventEmitter<number>();

  remove(i: number): void {
    this.emitTodoTasks.emit(i);
  }

  addClass() {
    return this.tasks.length > 3 ? 'list-group-item-danger' : 'list-group-item-success';
  }
}
