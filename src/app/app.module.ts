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
    MenuItemComponent
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
