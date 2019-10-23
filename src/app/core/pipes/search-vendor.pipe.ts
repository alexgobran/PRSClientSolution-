import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from "../../vendor/vendor.class";

@Pipe({
  name: 'searchVendors'
})
export class SearchVendorPipe implements PipeTransform {

  transform(vendors: Vendor[], substr: string = ''): Vendor[] {
    if (substr == '') { return vendors; }
    let selectedVendors: Vendor[] = [];
    for (let vendor of vendors) {
      if (vendor.id.toString().toLowerCase().includes(substr)
      || vendor.code.toLowerCase().includes(substr)
      ||  vendor.name.toLowerCase().includes(substr)
      || vendor.address.toLowerCase().includes(substr)
      || vendor.city.toLowerCase().includes(substr)
      || vendor.state.toLowerCase().includes(substr)
      || vendor.zip.toLowerCase().includes(substr)
      // ||  ((vendor.phone != null) && vendor.phone.toLowerCase().includes(substr))
      // || ((vendor.email != null) && vendor.email.toLowerCase().includes(substr))
        )
      {
        selectedVendors.push(vendor);
        continue;


      }
    }
    return selectedVendors;
  }

}
