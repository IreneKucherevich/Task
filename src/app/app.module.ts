import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UsersComponent } from './users/users.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    UsersComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    { path: 'users', component: UsersComponent},
    { path: 'tasks', component: TasksComponent }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
