import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTasksComponent } from './todo-tasks/todo-tasks.component';
import { DoneTasksComponent } from './done-tasks/done-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTasksComponent,
    DoneTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
