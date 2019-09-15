import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { ContentcontrolComponent } from './contentcontrol/contentcontrol.component';
import { UsersComponent } from './users/users.component';
import { CreateuserComponent } from './users/createuser/createuser.component';

const routes:Routes=[
{path:'Users',component:UsersComponent},
{path:'ContentControl/:id',component:ContentcontrolComponent,outlet:'content'},
{path:'newuser',component:CreateuserComponent},
// {path:'List',component:ListComponent},
// {path:'Setting',component:SettingComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
