import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], prop: string ="id", order: string ="asc"): any [] {
   
//sort function in another function
    const sortOrder = ( p1: any, p2: any) => {
      let a=p1[prop].toString().toLowerCase();
      let b=p2[prop].toString().toLowerCase();
      if(a===b) return 0;
      if(order.toLowerCase() =="desc") {
        return a < b ? 1 : -1;
      }else{
        return a <b ? -1: 1;
      }
      

    }
    return arr.sort(sortOrder)
  }

}
