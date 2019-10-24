import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.services';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  
vendor: Vendor;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vendorsvc: VendorService
  ) { }

  save2(): void {
    
      this.vendorsvc.change(this.vendor).subscribe(
      res => {
        console.log("Vendor change resp: ", res)
        this.router.navigateByUrl("vendors/list");
      }
      , err => {
        console.error(err);
      })

    }
  ngOnInit() {
    let vendorid = this.route.snapshot.params.id

    this.vendorsvc.get(vendorid).subscribe(
      vendor => {
        this.vendor = vendor;
        
        console.log("User:", vendor);
      }
      , err => {
        console.error(err)
      })
  }

  
}
