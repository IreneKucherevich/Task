import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TasksComponent } from './tasks/tasks.component';

export const appRoutes: Routes =[
    { path: 'users', component: UsersComponent},
    { path: 'tasks', component: TasksComponent }
];