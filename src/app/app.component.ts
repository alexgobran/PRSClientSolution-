import { Component } from '@angular/core';
import { UserService } from './user/user.services';
import { VendorService } from './vendor/vendor.services';
import { ProductService } from './product/product.services';
import { RequestService } from './request/request.services';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private usersvc: UserService, vendorsvc: VendorService, productsvc: ProductService,requestsvc: RequestService) {
    
  };

  
  
}

