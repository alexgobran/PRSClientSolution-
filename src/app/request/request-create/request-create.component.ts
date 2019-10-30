import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.services';
import { User } from '../../user/user.class';
import { SystemService } from '../../system/system.service';
import {  Router } from '@angular/router';
import { UserService } from '../../user/user.services';








@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  currentuser: User;
  request: Request = new Request();
  constructor(
    private router: Router,
    private requestsvc: RequestService,
    private usersvc: UserService,
    private syssvc: SystemService,
    

  ) { }

  save2(): void {
console.log("before create",this.request);
    this.requestsvc.create(this.request).subscribe(
      res => {
        console.log("Res from Request create:", res);
        this.router.navigateByUrl('/requests/list');
      }
      , err => { console.log(err); }

    );

  }
  
  ngOnInit() {


    this.currentuser = this.syssvc.GetUser();

    
    this.request.usersId = this.currentuser.id;




    console.log("user:", this.currentuser);
  }

}


//  this.syssvc.checkLogin();this.request.usersId=this.syssvc.loggedInUser.id;
//  this.loggedInUserUsername = this.syssvc.loggedInUser.username;


