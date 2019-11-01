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
import {ProductListComponent} from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import {RequestListComponent} from './request/request-list/request-list.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import {LineComponent} from './requestline/lines/lines.component';
import { LineCreateComponent } from './requestline/lines-create/lines-create.component';
import { LineEditComponent } from './requestline/lines-edit/lines-edit.component';
import {LoginComponent} from './login/login.component';


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
  
  {path: 'products/list', component: ProductListComponent},
  {path: 'products/create',component: ProductCreateComponent},
{path: 'products/detail/:id',component: ProductDetailComponent},
{path: 'products/edit/:id',component:ProductEditComponent},

{path: 'requests/list', component: RequestListComponent},
  {path: 'requests/create',component: RequestCreateComponent},
{path: 'requests/detail/:id',component: RequestDetailComponent},
{path: 'requests/edit/:id',component:RequestEditComponent},

{path: 'requestlines/line/:id', component: LineComponent},
  {path: 'requestlines/create/:id',component: LineCreateComponent},
{path: 'requestlines/edit/:id',component:LineEditComponent},

{path: 'login', component: LoginComponent},
 


  {path: '**',component: FourOhFourComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
