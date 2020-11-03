import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { RouterModule, Routes} from '@angular/router';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailsUserComponent } from './components/details-user/details-user.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { DetailsPostComponent } from './components/details-post/details-post.component';
import { PostComponent } from './components/post/post.component';
import { UserPostComponent } from './components/user-post/user-post.component';

const routes: Routes = [
  {path: 'all-users', component: AllUsersComponent, children: [
    {path: 'details', component: DetailsUserComponent, children: [
        {path: 'postdetals/:id', component: DetailsPostComponent}
      ]}
    ]},
  {path: 'all-posts', component: AllPostsComponent, children: [
      {path: 'details/:id', component: DetailsPostComponent}
    ]}
    ];

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    DetailsUserComponent,
    AllPostsComponent,
    DetailsPostComponent,
    PostComponent,
    UserPostComponent
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
