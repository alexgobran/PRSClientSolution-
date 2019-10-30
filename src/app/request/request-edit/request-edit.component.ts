

  import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.services';
import { User } from '../../user/user.class';
import { SystemService } from '../../system/system.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user/user.services';








@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  currentuser: User;
  request: Request = new Request();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService,
    private usersvc: UserService,
    private syssvc: SystemService,
    

  ) { }

  save2(): void {
console.log("before edit",this.request);
    this.requestsvc.change(this.request).subscribe(
      res => {
        console.log("Res from Request edit:", res);
        this.router.navigateByUrl('/requests/list');
      }
      , err => { console.log(err); }

    );

  }
  
  ngOnInit() {



      let userid = this.route.snapshot.params.id
      this.currentuser = this.syssvc.GetUser();



    this.requestsvc.get(userid).subscribe(
      req=> {
        this.request = req;
        
    

        console.log("User:", req);
      }
      , err => {
        console.error(err)
      })


    // console.log("user:", this.currentuser);
  }

}


//  this.syssvc.checkLogin();this.request.userId=this.syssvc.loggedInUser.id;
//  this.loggedInUserUsername = this.syssvc.loggedInUser.username;


