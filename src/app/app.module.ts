import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { BooldispPipe } from './core/pipes/booldisp.pipe';
import { FourOhFourComponent } from './core/four-oh-four/four-oh-four.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { MenuComponent } from './core/menu/menu.component';
import { MenuItemComponent } from './core/menu-item/menu-item.component';
import { SortPipe } from './core/pipes/sort.pipe';
import { SearchUserPipe } from './core/pipes/search-user.pipe';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { SearchVendorPipe } from './core/pipes/search-vendor.pipe';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { SearchProductPipe } from './core/pipes/search-product.pipe';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { SearchRequestPipe } from './core/pipes/search-request.pipe';
import { LoginComponent } from './login/login.component';
import { LineComponent } from './requestline/lines/lines.component';
import { LineEditComponent } from './requestline/lines-edit/lines-edit.component';
import { LineCreateComponent } from './requestline/lines-create/lines-create.component';
import { SearchLinesPipe } from './core/pipes/search-lines.pipe';
import { ReviewListComponent } from './request/review-list/review-list.component';
import { ReviewStatusComponent } from './request/review-status/review-status.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    BooldispPipe,
    FourOhFourComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    MenuComponent,
    MenuItemComponent,
    SortPipe,
    SearchUserPipe,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorListComponent,
    VendorEditComponent,
    SearchVendorPipe,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductEditComponent,
    SearchProductPipe,
    RequestCreateComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestListComponent,
    SearchRequestPipe,
    LoginComponent,
    LineComponent,
    LineEditComponent,
    LineCreateComponent,
    SearchLinesPipe,
    ReviewListComponent,
    ReviewStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
