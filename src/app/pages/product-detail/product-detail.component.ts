import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConfigService } from 'src/providers/config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: any;
  product:any = {};
  slides:any =[];
  showbtn = true;
  constructor(private route: ActivatedRoute,private location: Location,public config: ConfigService, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = this.location.getState();
      this.config.getHttp('getProductById?id=' + this.id.id, '').then((data: any) => {
        this.product = data.data;
        console.log(data);
        console.log(this.product);
        if (this.product.brochure) {
          this.showbtn = false;
          var pdf = document.getElementById("pdf_link") as HTMLAnchorElement | null;
          pdf!.href = this.config.imgUrl + this.product.brochure;
        }
      });
    });
  }

}
