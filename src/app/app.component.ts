import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Tasks';
  counter: number = 0;
  emptyTasks: string = 'Your tasks is empty';

  increment(): void {
    this.counter++;
  }
  decrement(): void {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}
