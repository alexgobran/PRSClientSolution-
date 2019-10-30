import { Component, OnInit } from '@angular/core';
import { RequestService} from '../request.services';
import { Request} from '../request.class';
import { getDefaultService } from 'selenium-webdriver/opera';
import {SystemService} from '../../system/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  get= this.syssvc.GetUser();
  requests: Request[]=[];
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
  
    ) { 
    
  }


  ngOnInit() {
   
    this.get;
   

    this.requestsvc.list().subscribe(requests => {
      
      this.requests = requests;
      console.log("Requests",requests);
  },
err =>{
  console.error(err);
})
}
}

