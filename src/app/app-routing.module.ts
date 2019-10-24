import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user/user-list/user-list.component';
import { FourOhFourComponent } from './core/four-oh-four/four-oh-four.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import {VendorListComponent} from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';


const routes: Routes = [
{path:'', redirectTo:"/users/list", pathMatch:'full'},
  {path: 'users/list', component: UserListComponent},
    {path: 'users/create',component: UserCreateComponent},
  {path: 'users/detail/:id',component: UserDetailComponent},
  {path: 'users/edit/:id',component:UserEditComponent},

  {path: 'vendors/list', component: VendorListComponent},
    {path: 'vendors/create',component: VendorCreateComponent},
  {path: 'vendors/detail/:id',component: VendorDetailComponent},
  {path: 'vendors/edit/:id',component:VendorEditComponent},
  
  {path: '**',component: FourOhFourComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
