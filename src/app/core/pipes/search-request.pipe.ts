import { Pipe, PipeTransform } from '@angular/core';
import { Request } from "../../request/request.class"


@Pipe({
  name: 'searchRequests'
})
export class SearchRequestPipe implements PipeTransform {

  transform(requests: Request[], substr: string = ''): Request[] {
    if (substr == '') { return requests; }
    
    let selectedRequests: Request[] = [];

    for (let request of requests) {
      //the if statement below was added because request.rejectionReason is null and search will not work if there any null properties
      if ( request.rejectionReason == null ){
        request.rejectionReason= ""}
      if (request.id.toString().toLowerCase().includes(substr)
      || request.description.toLowerCase().includes(substr)
      ||  request.justification.toLowerCase().includes(substr)
      || request.rejectionReason.toString().toLowerCase().includes(substr)
      || request.status.toLowerCase().includes(substr)
      || request.total.toString().includes(substr)
      || request.usersId.toString().toLowerCase().includes(substr)
  
        )
      {
        selectedRequests.push(request);
        continue;


      }
    }
    return selectedRequests;
  }

}
