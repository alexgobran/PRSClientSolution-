
import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user.class';
import { UserService} from '../user/user.services';
import { HttpClient } from '@angular/common/http';
import {Request} from '../request/request.class';
import {RequestService} from '../request/request.services'




const baseUrl= "http://localhost:55555/api/login";

@Injectable({
    providedIn: 'root'
})
export class SystemService {


      _loggedInUser=null;
    
    
      

    SetUser(user:User) {
        
        this._loggedInUser =user;
    }

    GetUser() {
        
        

        return this._loggedInUser;
    }



    
    

    

    
//     user: User = null;
// SetUser(user:User){this.user = user;}


    

    

// syssvc.setUser= this.user;
// set User(user: User) {
//     this._loggedInUser = user;
// }



// loggedInUser: User= null;
// checkLogin(): void {
//     if (this.isUserloggedIn) {
//         this.router.navigatebyUrl("/login");
//     }
// }

// get isUserloggedIn(): boolean {return this.loggedinUser ! = null;}

// get loggedInUser(); User {return this._loggedInUser;}

// get loggedInUser(user: User) (this._loggedInUser = user; console.log("Logged in:", this.)
}
