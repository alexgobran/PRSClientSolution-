import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Line } from './requestLines.class';
import { HttpClient } from '@angular/common/http';
import {User} from '../user/user.class';
import {SystemService} from '../system/system.service';







const baseUrl= "http://localhost:55555/api/requestlines";

 @Injectable({
     providedIn: 'root'
 })
 export class LineService {


list(): Observable<Line[]> {

    return this.http.get(`${baseUrl}`) as Observable<Line[]>;

}
get (id: string): Observable<Line> {
    return this.http.get(`${baseUrl}/${id}`) as Observable<Line>;
}

create(line:Line) : Observable<any> {
    // console.log(line);
return this.http.post(`${baseUrl}`,line) as Observable<any>;
}
change(line:Line) : Observable<any> {
    return this.http.put (`${baseUrl}/${line.id}`,line) as Observable<any>;
}
remove(line:Line) : Observable<any> {
    return this.http.delete (`${baseUrl}/${line.id}`) as Observable<any>;
}

     constructor(
        private http: HttpClient,
    private sysvc:SystemService,
        ){}

 }
