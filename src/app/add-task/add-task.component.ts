import {Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Output() emitTask = new EventEmitter<string>();
  @Input() tasks: string[];
  @Output() emitRemoveAll = new EventEmitter();
  @Input() showError: boolean;

  errorMsg = 'Pole nie może się powtarzać lub być pustę';
  task: string;

  add(task: string = ''): void {
    this.emitTask.emit(task);
    this.task = '';
  }

  removeAll(e: string[]): void {
    this.emitRemoveAll.emit(e);
  }
}
