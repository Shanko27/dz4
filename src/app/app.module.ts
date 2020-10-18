import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {Route, RouterModule, Routes} from '@angular/router';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailsUserComponent } from './components/details-user/details-user.component';

const routes: Routes = [
  {path: 'all-users', component: AllUsersComponent, children:[
    {path: 'details/:id', component: DetailsUserComponent}
    ]}];

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    DetailsUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
