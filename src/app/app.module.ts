import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {Route, RouterModule, Routes} from "@angular/router";
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: 'all-users', component: AllUsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
