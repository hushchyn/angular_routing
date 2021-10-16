import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserListComponent } from './works/user-list/user-list.component';
import { TaskListComponent } from './works/task-list/task-list.component';
import { PhoneBookComponent } from './works/phone-book/phone-book.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'works', component: WorksComponent, children:[
    { path: 'cenzor', component: CenzorComponent},
    { path: 'user-list', component: UserListComponent},
    { path: 'task-list', component: TaskListComponent},
    { path: 'phone-book', component: PhoneBookComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
