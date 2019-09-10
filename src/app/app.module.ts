import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    TasksModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
