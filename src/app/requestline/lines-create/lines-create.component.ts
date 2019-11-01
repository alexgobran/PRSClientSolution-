import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {LineService} from '../requestLines.services';
import {Line} from '../requestLines.class';
import {RequestService} from '../../request/request.services';
import {Request} from '../../request/request.class';
import {Product} from '../../product/product.class';
import {ProductService} from '../../product/product.services';


 import {SystemService} from '../../system/system.service'
 import {User} from '../../user/user.class';


@Component({
  selector: 'app-lines-create',
  templateUrl: './lines-create.component.html',
  styleUrls: ['./lines-create.component.css']
})
export class LineCreateComponent implements OnInit {
  currentuser: User;
  request: Request;
  products: Product[];
line: Line = new Line();
 requestid = this.route.snapshot.params.id

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private linesvc: LineService,
    private requestsvc: RequestService,
    private productsvc: ProductService,

    private syssvc: SystemService
  ) { }
  save2():void {
     
    this.linesvc.create(this.line).subscribe(
      res => {
        console.log("Res from Line create:",res);
      this.router.navigateByUrl("/requestlines/line/{{requestid}}");
     }
      ,err => {console.log(err); }
      
    );

  }

  ngOnInit() {

    this.productsvc.list().subscribe(
      resp=>{this.products=resp}
    );
    console.log("products:", this.products);

    this.currentuser = this.syssvc.GetUser();

    this.requestsvc.get(this.requestid).subscribe(request => {
      this.request = request;
      console.log("Lines",request);
    },
    err =>{
      console.error(err);
    })
    

     this.line.requestsId= this.requestid

    
       console.log("Request:", this.request);
      
     




    
  

  }
}
