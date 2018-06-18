import {Component, EventEmitter, Input, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.scss', '../todo-tasks/todo-tasks.component.scss'],
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
export class DoneTasksComponent {
  @Input() doneTasks;
  @Input() tasks;
  @Output() emitRemove = new EventEmitter<number>();

  removeDone(i: number): void {
    this.emitRemove.emit(i);
  }

  quantityColor(): string {
    return `rgba(70, ${80 + this.doneTasks.length * 40}, 100, 0.5)`;
  }

  progressWidth(): string {
    const doneLength: number = this.doneTasks.length;
    const todoLength: number = this.tasks.length;
    return `${(doneLength / (doneLength + todoLength)) * 100}%`;
  }
}
