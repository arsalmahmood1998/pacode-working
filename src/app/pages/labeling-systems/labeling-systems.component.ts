import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-labeling-systems',
  templateUrl: './labeling-systems.component.html',
  styleUrls: ['./labeling-systems.component.scss']
})
export class LabelingSystemsComponent implements OnInit {
  slides: any = [];
  imgUrl: string = '';
  categories: any = [];
  filteredData:any = [];
  features: any = [];
  accessories: any = [];
  id: any;
  brand:string = '';
  slideName: string = '';
  searchTerm: string = '';

  constructor(public config: ConfigService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = this.location.getState();
      if (this.id.id == 1) {
        this.slideName = 'Weber'
        this.brand = 'assets/images/weber.png'
      }
      else if (this.id.id == 2) {
        this.slideName = 'Reiner'
        this.brand = 'assets/images/reiner.png'
      }
      else if (this.id.id == 3) {
        this.slideName = 'Today Tec USA'
        this.brand = 'assets/images/usa.png'
      }
      else if (this.id.id == 4) {
        this.slideName = 'Demac'
        this.brand = 'assets/images/demac.png'
      }
      else if (this.id.id == 5) {
        this.slideName = 'Armor IMAK'
        this.brand = 'assets/images/armor.svg'
      }
    });
    this.config.getHttp('getAllLabelingSystemsSlider', '').then((data: any) => {
      this.slides = data.data[0];
      this.imgUrl = this.config.imgUrl + this.slides.image
    })
      .catch((err: any) => { });

    this.config.getHttp('getAllLabelingSystemsCategories?company_id=' + this.id.id, '').then((data: any) => {
      this.categories = data.data;
      this.filteredData = this.categories;
    })
      .catch((err: any) => { });

    this.config.getHttp('getAllLabelingSystemsFeatures', '').then((data: any) => {
      this.features = data.data;
    })
      .catch((err: any) => { });

    this.config.getHttp('getAllLabelingSystemsAccessoriess', '').then((data: any) => {
      this.accessories = data.data;
    })
      .catch((err: any) => { });

  }

  goToProducts(id: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    }
    this.router.navigate(['/labeling-systems-products'], navigationExtras);
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
