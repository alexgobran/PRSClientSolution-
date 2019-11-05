import { Component, OnInit } from '@angular/core';
import { RequestService} from '../request.services';
import { Request} from '../request.class';
import { getDefaultService } from 'selenium-webdriver/opera';
import {SystemService} from '../../system/system.service';
import { Line} from '../../requestline/requestLines.class';
import { LineService} from '../../requestline/requestLines.services';
import { Subscriber } from 'rxjs';
import { request } from 'http';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  get= this.syssvc.GetUser();
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
    private requestsvc:RequestService,
    private syssvc:SystemService,
    private linesvc:LineService,) { }

   

  ngOnInit() { 
    
   
  let user= this.get;

    
    

    this.requestsvc.reviews(user).subscribe(requests => {
      
      {
        
      this.requests = requests;
     
      console.log("Requests",requests);}
    },
      err =>{
        console.error(err);
      })
    }
  }
      


      
    
      

      
