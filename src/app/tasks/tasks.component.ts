import { Component } from '@angular/core';
import { TASKS } from '../moc-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent {
  tasks: string[] = TASKS;
}
