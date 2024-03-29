import { Component, OnInit } from '@angular/core';
import { RequestService} from '../request.services';
import { Request} from '../request.class';
import { getDefaultService } from 'selenium-webdriver/opera';
import {SystemService} from '../../system/system.service';
import { Line} from '../../requestline/requestLines.class';
import { LineService} from '../../requestline/requestLines.services';
import { Subscriber } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewStatusComponent } from '../review-status/review-status.component';




@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  user= this.syssvc.GetUser();
  requests: Request[]=[];
  lines: Line[]=[];
  request: Request;
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
    private router: Router,
    private requestsvc:RequestService,
    private syssvc:SystemService,
    private linesvc:LineService

  
    ) {  }

  // reviewOnly(user):void {
  //   this.requestsvc.reviews(this.get).subscribe (

  //   res => {
  //     console.log("Request review res:", res);
  //     this.router.navigateByUrl("/requests/list");
  //   }
  //         ,err => console.error(err)
  // );

  // }


  ngOnInit() {

    
    
   
    this.user;

    
    

    this.requestsvc.list().subscribe(requests => {
      
     
      this.requests = requests;
      console.log("Requests",requests);
    },
      err =>{
        console.error(err);
      })
     }
  }
      


      
    
      

      

      
      
      
    

      
