import { Component, OnInit } from '@angular/core';
import {LineService} from '../requestLines.services';
import { Line} from '../requestLines.class';
import {SystemService} from '../../system/system.service';
import { RequestService} from '../../request/request.services';
import { Request} from '../../request/request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService} from '../../user/user.services';






@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LineComponent implements OnInit {

  get= this.syssvc.GetUser();
request:Request;
lines: Line[]=[];
sortCriteria: string = "lastname";
  sortOrder: string  = "desc";
  searchCriteria: string ='';
  substr: string = '';
    currentrequest: any;

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
    private syssvc: SystemService,) { }

  ngOnInit() {
    // let requestid = this.route.snapshot.params.id
    //   this.currentrequest = this.syssvc.GetUser();

    //   this.linesvc.get(requestid).subscribe(
    //     req=> {
    //       this.lines= req;
          
      
  
    //       console.log("lines:", req);
    //     }
    this.linesvc.list().subscribe(lines => {
      this.lines = lines;
      console.log("Lines",lines);
  }
        , err => {
          console.error(err)
        })
  
    
}
}
