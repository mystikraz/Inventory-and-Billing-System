import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { TableComponent } from './table/table.component';

const routes:Routes=[
{path:'table',component:TableComponent},
// {path:'Transaction',component:TransactionComponent},
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
