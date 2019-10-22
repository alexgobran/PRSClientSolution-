import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.services';
import { User } from '../user.class';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  verifyDelete: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersvc: UserService) { }

  edit(): void {
    this.router.navigateByUrl("/users/edit/${this.user.id}");
  }
  verify(): void {
    this.verifyDelete = !this.verifyDelete;
  }

  delete(): void {
    this.usersvc.remove(this.user).subscribe(

      res => {
        console.log("User delete res:", res);
        this.router.navigateByUrl("/users.list");
      }
            ,err => console.error(err)
    );

  }
  ngOnInit() {
    let userid = this.route.snapshot.params.id

    this.usersvc.get(userid).subscribe(user => {
      this.user = user;
      console.log("User:", user);
    },
      err => {
        console.error(err)
      })



  }
}
