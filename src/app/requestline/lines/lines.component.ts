import { Component, OnInit } from '@angular/core';
import {LineService} from '../requestLines.services';
import { Line} from '../requestLines.class';
import {SystemService} from '../../system/system.service';
import { RequestService} from '../../request/request.services';
import { Request} from '../../request/request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService} from '../../user/user.services';
import { User } from '../../user/user.class';






@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LineComponent implements OnInit {

   
request:Request;
currentuser: User;
lines: Line[]=[];
line: Line;
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
    private linesvc:LineService,
    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService,
    private usersvc: UserService,
    private syssvc: SystemService,
    ) { }
   

    edit(): void {
      this.router.navigateByUrl(`/requestlines/edit/ ${this.line.requestsId}`); 
    }
    delete(): void {
      this.linesvc.remove(this.line).subscribe(
  
        res => {
          // let requestid = this.route.snapshot.params.id

          console.log("Line delete res:", res);
          this.router.navigateByUrl("/requestlines/line/{{line.requestsId}}");
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

    //    this.usersvc.get(this.currentuser).subscribe(
    //  req=> { this.currentuser= req}
          
      
  
         console.log("user:", this.currentuser);
    //     }
    // this.linesvc.get(this.request..id).subscribe(lines => {
    //   this.lines = lines;
    //   console.log("Lines",lines);
  // }
  //       , err => {
  //         console.error(err)
  //       })
  
    
}
}
