import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.scss', '../todo-tasks/todo-tasks.component.scss']
})
export class DoneTasksComponent {
  @Input() doneTasks;
  @Output() emitRemove = new EventEmitter<number>();

  removeDone(i: number): void {
    this.emitRemove.emit(i);
  }
}
