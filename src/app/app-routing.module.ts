import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponentComponent } from './posts-component/posts-component.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'followers/:id/:login', component: GithubProfileComponent},
  {path: 'followers', component: GithubFollowersComponent},
  {path: 'posts', component: PostsComponentComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
