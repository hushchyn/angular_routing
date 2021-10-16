import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorksComponent } from './works/works.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserListComponent } from './works/user-list/user-list.component';
import { TaskListComponent } from './works/task-list/task-list.component';
import { PhoneBookComponent } from './works/phone-book/phone-book.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ChildTlComponent } from './works/task-list/child-tl/child-tl.component';

import { SearchPipe } from './shared/pipes/search.pipe';
import { SortPipe } from './shared/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorksComponent,
    CenzorComponent,
    UserListComponent,
    TaskListComponent,
    PhoneBookComponent,
    HomeComponent,
    HeaderComponent,
    ChildTlComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
