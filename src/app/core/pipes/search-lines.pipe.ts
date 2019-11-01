import { Pipe, PipeTransform } from '@angular/core';
import { Line } from "../../requestline/requestLines.class";

@Pipe({
  name: 'searchLines'
})
export class SearchLinesPipe implements PipeTransform {

  transform(requestlines: Line[], substr: string = ''): Line[] {
    if (substr == '') { return requestlines; }
    let selectedRequestlines: Line[] = [];
    for (let requestline of requestlines) {
      if ( requestline.productsId == null ){
        requestline.productsId=0} 
        if ( requestline.requestsId == null ){
          requestline.requestsId=0}
          if ( requestline.quantity == null ){
            requestline.quantity=0}
          
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