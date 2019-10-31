import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {LineService} from '../requestLines.services';
import {Line} from '../requestLines.class';
import {RequestService} from '../../request/request.services';
import {Request} from '../../request/request.class';

import {Vendor} from '../../vendor/vendor.class';
 import {SystemService} from '../../system/system.service'
 import {User} from '../../user/user.class';


@Component({
  selector: 'app-lines-create',
  templateUrl: './lines-create.component.html',
  styleUrls: ['./lines-create.component.css']
})
export class LineCreateComponent implements OnInit {
  requests: Request[];
  currentrequest: Request;
line: Line = new Line();
currentuser: User;
  constructor(
    private router: Router,
    private linesvc: LineService,
    private requestsvc: RequestService,
    private syssvc: SystemService
  ) { }
  save2():void {
     
    this.linesvc.create(this.line).subscribe(
      res => {
        console.log("Res from Line create:",res);
      this.router.navigateByUrl('/requestlines/line{{request.id}}');
     }
      ,err => {console.log(err); }
      
    );

  }

  ngOnInit() {
    this.requestsvc.list().subscribe(
      resp=>{this.requests=resp}
    );
    console.log("requests:", this.requests);

    // this.line.requestsId = this.currentrequest.d;

    
   




    
  }

}
