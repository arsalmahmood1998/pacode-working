import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConfigService } from 'src/providers/config/config.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-print-and-apply-product-detail',
  templateUrl: './print-and-apply-product-detail.component.html',
  styleUrls: ['./print-and-apply-product-detail.component.scss']
})
export class PrintAndApplyProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private location: Location,public config: ConfigService, private router: Router) { }
  id: any;
  product:any = {};
  showbtn = true;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = this.location.getState();
      this.config.getHttp('getPrintAndApplyProductsById?id=' + this.id.id, '').then((data: any) => {
        this.product = data.data;
        if (this.product.brochure) {
          this.showbtn = false;
          var pdf = document.getElementById("pdf_link") as HTMLAnchorElement | null;
          pdf!.href = this.config.imgUrl + this.product.brochure;
        }
      });
    });
  }

}
