import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';
import { HttpClient } from '@angular/common/http';
import {UserService} from '../user/user.services';
import {User} from '../user/user.class';
import {SystemService} from '../system/system.service';
import { request } from 'http';







const baseUrl= "http://localhost:55555/api/requests";

 @Injectable({
     providedIn: 'root'
 })
 export class RequestService {


list(): Observable<Request[]> {

    return this.http.get(`${baseUrl}`) as Observable<Request[]>;

}
get (id: string): Observable<Request> {
    return this.http.get(`${baseUrl}/${id}`) as Observable<Request>;
}

create(request:Request) : Observable<any> {
    console.log("create works") 
return this.http.post(`${baseUrl}`,request) as Observable<any>

}
change(request:Request) : Observable<any> {
    return this.http.put (`${baseUrl}/${request.id}`,request) as Observable<any>;
}
remove(request:Request) : Observable<any> {
    return this.http.delete(`${baseUrl}/${request.id}`) as Observable<any>;
}

reject(request:Request) : Observable<any> {
    return this.http.put(`${baseUrl}/reject/${request.id}`,request) as Observable<any>;
}
reviews(user:User) : Observable<any> {
    return this.http.get(`${baseUrl}/reviewOnly/${user.id}`) as Observable<any>;
}
approve(request:Request) : Observable<any> {
    return this.http.put(`${baseUrl}/approve/${request.id}`,request) as Observable<any>;
}
review(request:Request) : Observable<any> {
    return this.http.put(`${baseUrl}/review/${request.id}`,request) as Observable<any>;

     
 }
 constructor(private http: HttpClient,
    private sysvc:SystemService,
    ){}

 }
