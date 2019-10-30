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
      if (request.id.toString().toLowerCase().includes(substr)
      || request.description.toLowerCase().includes(substr)
      ||  request.justification.toLowerCase().includes(substr)
      || request.rejectionReason.toLowerCase().includes(substr)
      || request.status.toLowerCase().includes(substr)
      || request.total.toString().includes(substr)
      || request.userId.toString().toLowerCase().includes(substr)
  
        )
      {
        selectedRequests.push(request);
        continue;


      }
    }
    return selectedRequests;
  }

}
