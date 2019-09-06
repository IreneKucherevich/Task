import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [TasksComponent],
  imports: [
    BrowserModule
  ],
  exports: [TasksComponent]
})
export class TasksModule { }
