import { Component, OnInit } from '@angular/core';
import { Line } from '../requestLines.class';
import { LineService } from '../requestLines.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../../request/request.class';
import { RequestService } from '../../request/request.services';
import {SystemService} from '../../system/system.service';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.services';
import { User } from '../../user/user.class';





@Component({
  selector: 'app-lines-edit',
  templateUrl: './lines-edit.component.html',
  styleUrls: ['./lines-edit.component.css']
})
export class LineEditComponent implements OnInit {
line: Line;
request:Request;
products: Product[];
currentuser: User;
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

  constructor( 
    private route: ActivatedRoute,
    private syssvc: SystemService,
    private productsvc: ProductService,
    private router: Router,
    private requestsvc: RequestService,
    private linesvc: LineService) { }

    requestid = this.route.snapshot.params.id;

    save2(): void {
    
      this.linesvc.change(this.line).subscribe(
        res => {
          console.log("Line change res: ", res);
          this.router.navigateByUrl(`/requestlines/line/${this.line.requestsId}`);
        }
        , err => 
          console.error(err)
        );
    
    }
  ngOnInit() {  
    this.productsvc.list().subscribe(
      resp=>{this.products=resp}
    );
    console.log("products:", this.products);

    this.currentuser = this.syssvc.GetUser();

    let lineid = this.route.snapshot.params.id

    this.linesvc.get(lineid).subscribe(req => {
     this.line = req;
     console.log("Lines",req);
 
  },
err =>{
  console.error(err);
})

  }

}
