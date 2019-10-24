import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "../../product/product.class"

@Pipe({
  name: 'searchProducts'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], substr: string = ''): Product[] {
    if (substr == '') { return products; }
    let selectedProducts: Product[] = [];
    for (let product of products) {
      if (product.id.toString().toLowerCase().includes(substr)
      || product.partNbr.toLowerCase().includes(substr)
      ||  product.name.toLowerCase().includes(substr)
      || product.price.toString().toLowerCase().includes(substr)
      || product.unit.toLowerCase().includes(substr)
      || product.photoPath.toLowerCase().includes(substr)
      || product.vendorId.toString().toLowerCase().includes(substr)
  
        )
      {
        selectedProducts.push(product);
        continue;


      }
    }
    return selectedProducts;
  }

}