import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { appRoutes } from './routes';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule,
    TasksModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
