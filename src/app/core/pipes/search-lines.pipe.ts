import { Pipe, PipeTransform } from '@angular/core';
import { RequestLines } from "../../requestlines/requestLines.class";

@Pipe({
  name: 'searchProducts'
})
export class SearchLinesPipe implements PipeTransform {

  transform(requestlines: RequestLines[], substr: string = ''): RequestLines[] {
    if (substr == '') { return requestlines; }
    let selectedRequestlines: RequestLines[] = [];
    for (let requestline of requestlines) {
      if (requestline.id.toString().toLowerCase().includes(substr)
      || requestline.productsId.toString().includes(substr)
      ||  requestline.requestsId.toString().includes(substr)
      || requestline.quantity.toString().includes(substr)
      
  
        )
      {
        selectedRequestlines.push(requestline);
        continue;


      }
    }
    return selectedRequestlines;
  }

}