import { Routes } from '@angular/router';

export const appRoutes: Routes =[
    {
        path: '', 
        redirectTo: '', 
        pathMatch: 'full'
    },
    {
        path: 'users', 
        loadChildren: () => import('./users/users.module').then(mod => mod.UsersModule)
    },
    {
        path: 'tasks', 
        loadChildren: () => import('./tasks/tasks.module').then(mod => mod.TasksModule)
    }
];