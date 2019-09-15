import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';
import { ContentcontrolComponent } from './contentcontrol/contentcontrol.component';
import { UsersComponent } from './users/users.component';
import { CreateuserComponent } from './users/createuser/createuser.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ContentcontrolComponent,
    UsersComponent,
    CreateuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
