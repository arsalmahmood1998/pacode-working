import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConfigService } from 'src/providers/config/config.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pharma',
  templateUrl: './pharma.component.html',
  styleUrls: ['./pharma.component.scss']
})
export class PharmaComponent implements OnInit {
  id: any;
  products:any = [];
  pageTitle:string = '';
  imgUrl: string = '';
  slides: any = [];
  constructor(private route: ActivatedRoute,private location: Location,public config: ConfigService, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = this.location.getState();
      this.config.getHttp('getAllIndustryProductsByCategoryId?id=' + this.id.id, '').then((data: any) => {
        this.products = data.data;
        if (this.products === 'No Data Found') {
          this.router.navigate(['/home']);
        }
      });
  
      this.config.getHttp('getIndustryCategoriesById?id=' + this.id.id, '').then((data: any) => {
        this.pageTitle = data.data[0].name;
      });

      this.config.getHttp('getAllInkjetPrinterSlider', '').then((data: any) => {
        this.slides = data.data[0];
        this.imgUrl = this.config.imgUrl + this.slides.image
      })
        .catch((err: any) => { });
    });
  }

}
