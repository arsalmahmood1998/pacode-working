import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
import { NavigationExtras, Router } from '@angular/router'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-labeling-systems-products',
  templateUrl: './labeling-systems-products.component.html',
  styleUrls: ['./labeling-systems-products.component.scss']
})
export class LabelingSystemsProductsComponent implements OnInit {
  slides: any = [];
  imgUrl: string = '';
  categories: any = [];
  id: any;
  category:any ={};
  searchTerm: string = '';
  filteredData:any = [];

  constructor(public config: ConfigService, private router: Router, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = this.location.getState();
      this.config.getHttp('getAllLabelingSystemsProductsByCategoryId?id=' + this.id.id, '').then((data: any) => {
        this.categories = data.data;
        this.filteredData = this.categories;
      });
    });

    this.config.getHttp('getAllLabelingSystemsSlider', '').then((data: any) => {
      this.slides = data.data[0];
      this.imgUrl = this.config.imgUrl + this.slides.image
    })
    .catch((err: any) => { });

    this.config.getHttp('getAllLabelingSystemsCategoriesById?id=' + this.id.id, '').then((data: any) => {
      this.category = data.data
      
    })
    .catch((err: any) => { });


  }

  goToProducts(id: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    }
    this.router.navigate(['/labeling-systems-product-detail'], navigationExtras);
  }

  filterProducts(): void {
    if (this.searchTerm.trim() !== '') {
      this.filteredData = this.categories.filter((category: { name: string; }) =>
        category.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredData = this.categories;
    }
  }


}
