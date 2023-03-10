import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'userPage', component: UserComponent},
  {path: 'adminPage', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
