import {Component, EventEmitter, Input, Output} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Task} from '../task';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.scss'],
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

export class TodoTasksComponent {
  @Input() tasks;
  @Input() limit;
  @Output() emitRemove = new EventEmitter<number>();
  @Output() emitDone = new EventEmitter<Task>();

  remove(i: number): void {
    this.emitRemove.emit(i);
  }

  done(task: string, i: number): void {
    this.emitDone.emit({value: task, position: i});
  }

  addListItem(): string {
    return this.tasks.length > 3 ? 'list-group-item-danger' : 'list-group-item-success';
  }

  progressWidth(): string {
    return `${this.tasks.length * 10}%`;
  }
}
