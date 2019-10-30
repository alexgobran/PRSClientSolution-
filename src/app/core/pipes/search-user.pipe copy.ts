import { Pipe, PipeTransform } from '@angular/core';
import { User } from "../../user/user.class"
@Pipe({
  name: 'searchUsers'
})
export class SearchUserPipe implements PipeTransform {

  transform(users: User[], substr: string = ''): User[] {
    if (substr == '') { return users; }
    let selectedUsers: User[] = [];
    for (let user of users) {
      if (user.id.toString().toLowerCase().includes(substr)
      || user.username.toLowerCase().includes(substr)
      ||  user.firstname.toLowerCase().includes(substr)
      || user.lastname.toLowerCase().includes(substr)
      ||  ((user.phone != null) && user.phone.toLowerCase().includes(substr))
      || ((user.email != null) && user.email.toLowerCase().includes(substr))
        )
      {
        selectedUsers.push(user);
        continue;


      }
    }
    return selectedUsers;
  }

}
