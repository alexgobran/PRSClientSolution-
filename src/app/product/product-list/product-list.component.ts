import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.services';
import { Product} from '../product.class';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]=[];
  sortCriteria: string = "lastname";
  sortOrder: string  = "desc";
  searchCriteria: string ='';
  substr: string = '';

  sortBy(prop: string): void {
    if(this.sortCriteria === prop) {
      this.sortOrder === 'desc' ? 'asc' : 'desc';
    }
  this.sortCriteria = prop;
  }
  constructor(private productsvc:ProductService) { 
    
  }


  ngOnInit() {
    this.productsvc.list().subscribe(products => {
      this.products = products;
      console.log("Products",products);
  },
err =>{
  console.error(err);
})
}
}
