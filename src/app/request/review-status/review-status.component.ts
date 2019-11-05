import { Component, OnInit } from '@angular/core';
import { RequestService} from '../request.services';
import { Request} from '../request.class';
import { getDefaultService } from 'selenium-webdriver/opera';
import {SystemService} from '../../system/system.service';
import { Line} from '../../requestline/requestLines.class';
import { LineService} from '../../requestline/requestLines.services';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService} from '../../user/user.services';
import { User } from '../../user/user.class';

import { Subscriber } from 'rxjs';
import { request } from 'http';

@Component({
  selector: 'app-review-status',
  templateUrl: './review-status.component.html',
  styleUrls: ['./review-status.component.css']
})
export class ReviewStatusComponent implements OnInit {
  get= this.syssvc.GetUser();
  requests: Request[]=[];
  lines: Line[]=[];
  request: Request;
  rejectionReason: boolean = false;

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

  constructor(private linesvc:LineService,
    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService,
    private usersvc: UserService,
    private syssvc: SystemService,) { }

    edit(): void {
      this.router.navigateByUrl(`/requests/edit/${this.request.id}`); 
    }
    delete(request): void {
      this.requestsvc.remove(request).subscribe(
  
        res => {
          console.log("Line delete res:", res);
          this.router.navigateByUrl(`/requests/review/list`);
        }
              ,err => console.error(err)
      );
    }
    approveStatus(): void {
      this.requestsvc.approve(this.request).subscribe(
        res => {
          console.log("Request approved res:", res);
          this.router.navigateByUrl(`/requests/review/list`);
        }
              ,err => console.error(err)
      );
    }
    rejectStatus(): void {
      this.requestsvc.reject(this.request).subscribe(
        res => {
          console.log("Request rejected res:", res);
          this.router.navigateByUrl(`/requests/review/list`);
        }
              ,err => console.error(err)
      );
    }

      
    
    reviewStatus(request):void {
      this.requestsvc.review(request).subscribe(
        res => {
          console.log("Line review res:", res);
          this.router.navigateByUrl(`/requests/review/list`);
        }
              ,err => console.error(err)
      );
    }

      
    

  ngOnInit() {
    let requestid = this.route.snapshot.params.id

     this.requestsvc.get(requestid).subscribe(req => {
      this.request = req;
      console.log("Lines",req);
  },
err =>{
  console.error(err);
})

    
          
      
  
         console.log("request:", this.request);
  
  }

}
