import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [UsersComponent],
  imports: [ 
    BrowserModule,

  ],
  exports: [UsersComponent]
})
export class UsersModule { }
