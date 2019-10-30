import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';
import {ProductService} from '../product.services';
import {Product} from '../product.class';
import {VendorService} from '../../vendor/vendor.services';
import {Vendor} from '../../vendor/vendor.class';
 import {SystemService} from '../../system/system.service'


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit { 

  vendors: Vendor[];
  product:Product = new Product();
  constructor(
    private router: Router,
    private productsvc: ProductService,
    private vendorsvc: VendorService
  ) { }

  save2():void {
     
    this.productsvc.create(this.product).subscribe(
      res => {
        console.log("Res from Product create:",res);
      this.router.navigateByUrl('/products/list');
     }
      ,err => {console.log(err); }
      
    );

  }
  ngOnInit() {
   this.vendorsvc.list().subscribe(
      resp=>{this.vendors=resp}
    );
    
    console.log("vendors:", this.vendors);
//  this.syssvc.checkLogin();this.request.userId=this.syssvc.loggedInUser.id;
//  this.loggedInUserUsername = this.syssvc.loggedInUser.username;
    
  }

}
