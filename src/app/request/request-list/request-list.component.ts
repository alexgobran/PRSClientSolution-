import { Component, OnInit } from '@angular/core';
import { RequestService} from '../request.services';
import { Request} from '../request.class';
import { getDefaultService } from 'selenium-webdriver/opera';
import {SystemService} from '../../system/system.service';
import { Line} from '../../requestline/requestLines.class';
import { LineService} from '../../requestline/requestLines.services';
import { Subscriber } from 'rxjs';



@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  get= this.syssvc.GetUser();
  requests: Request[]=[];
  lines: Line[]=[];
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
    private linesvc:LineService,

  
    ) { 
    
  }


  ngOnInit() {

    
   
    this.get;
    // this.linesvc.list().subscribe(lines => {
      
    //   this.lines = lines;
    //   console.log("Requestlines",lines);
    // },
    // err =>{
    //   console.error(err);
    // })

    this.requestsvc.list().subscribe(requests => {
      
      this.requests = requests;
      console.log("Requests",requests);
    },
      err =>{
        console.error(err);
      })
    }
  }
      


      
    
      

      

      
      
      
    

      
