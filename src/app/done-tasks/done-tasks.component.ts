import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.scss', '../todo-tasks/todo-tasks.component.scss']
})
export class DoneTasksComponent {
  @Input() limit;
  @Input() doneTasks;
  @Output() emitRemove = new EventEmitter<number>();

  removeDone(i: number): void {
    this.emitRemove.emit(i);
  }

  quantityColor(): string {
    return `rgba(70, ${80 + this.doneTasks.length * 40}, 100, 0.5)`;
  }

  progressWidth(): string {
    return `${this.doneTasks.length * 10}%`;
  }
}
