import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '.././user/user.services';
import {User} from '.././user/user.class';
import {SystemService} from '../system/system.service';
import {RequestService} from '../request/request.services'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username='';
  password = '';
  user: User;

  
  
  constructor( 
    private router: Router,
    private usersvc: UserService,
    private Syssvc: SystemService) { }

    userlogin():void {
    
console.log("before userlogin method")
      this.usersvc.login(this.Username,this.password).subscribe(
        resp=>{ 
          this.Syssvc.SetUser(resp)

          this.user=resp
          console.log(this.user);
          if(this.Username!== this.user.username) {   
            alert("Incorrect Username!")
            return
          }
          this.router.navigateByUrl('/requests/list');

          
        
        
        }

        
      
       ,err => {console.log("Incorrect Username/Password combination"); }
       
      );
        console.log("user:", this.user);
    }
  ngOnInit() {
    
      
    
    
    }
    
    
  }


