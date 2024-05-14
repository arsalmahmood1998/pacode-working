import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss'],
})
export class ProductCategoriesComponent implements OnInit {
  constructor(
    public config: ConfigService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  slides: any = [];
  categories: any = [];
  imgUrl: string = '';
  benefits: any = {};
  id: any;
  categoryName: string = '';
  subCategoryName: string = '';
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = this.location.getState();
      console.log(this.id)
    });
    this.config
      .getHttp('getAllInkjetPrinterSlider', '')
      .then((data: any) => {
        this.slides = data.data[0];
        this.imgUrl = this.config.imgUrl + this.slides.image;
      })
      .catch((err: any) => {});
    this.config
      .getHttp('getAllInkjetPrinterBenefits', '')
      .then((data: any) => {
        this.benefits = data.data.description;
      })
      .catch((err: any) => {});
    this.config
      .getHttp(
        'getAllProductsByCategoryAndSubCategoryId?category_id=' +
          this.id.category_id +
          '&sub_category_id=' +
          this.id.subCategoryId,
        ''
      )
      .then((data: any) => {
        this.categories = data.data;
        console.log(this.categories)  
      })
      .catch((err: any) => {});
    this.config
      .getHttp('getAllCategoryById?id=' + this.id.category_id, '')
      .then((data: any) => {
        this.categoryName = data.data.name;
      })
      .catch((err: any) => {});
    this.config
      .getHttp('getAllSubCategoryById?id=' + this.id.subCategoryId, '')
      .then((data: any) => {
        this.subCategoryName = data.data.name;
      })
      .catch((err: any) => {});
  }

  goToProductDetail(id: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    }
    this.router.navigate(['/product-detail'], navigationExtras);
  }
}
