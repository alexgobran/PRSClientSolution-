import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.services';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../user/user.class';
import {SystemService} from '../../system/system.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
request: Request;
currentuser: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService,
    private syssvc: SystemService
  ) { }

 
  edit(): void {
    this.router.navigateByUrl(`/requests/edit/ ${this.request.id}`);  
  }
  

  delete(): void {
    this.requestsvc.remove(this.request).subscribe(

      res => {
        console.log("Request delete res:", res);
        this.router.navigateByUrl("/requests/list");
      }
            ,err => console.error(err)
    );

  }
  ngOnInit() {

    // this.currentuser = this.syssvc.GetUser();

    
    //   this.request.userId= this.currentuser.id;

    let requestid = this.route.snapshot.params.id
   
    this.requestsvc.get(requestid).subscribe(request => {
      this.request = request;
      console.log("Request:", request);
      
    },
      err => {
        console.error(err)
      })



  }
}
