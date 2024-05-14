import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-print-apply',
  templateUrl: './print-apply.component.html',
  styleUrls: ['./print-apply.component.scss']
})
export class PrintApplyComponent implements OnInit {
  slides:any = [];
  imgUrl:string = '';
  categories:any=[];
  content:any={};
  brand: string = '';
  id: any;
  filteredData:any = [];
  slideName: string = '';
  constructor(public config: ConfigService,private router: Router, private route: ActivatedRoute, private location: Location) { }

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
    this.config.getHttp('getAllPrintAndApplySlider', '').then((data: any) => {
      this.slides = data.data[0];
       this.imgUrl = this.config.imgUrl + this.slides.image
    })
    .catch((err: any) => {});
    this.config.getHttp('getPrintAndApplyProducts?company_id=' + this.id.id, '').then((data: any) => {
      this.categories = data.data;
      this.filteredData = this.categories;
    })
    .catch((err: any) => {});
    this.config.getHttp('getPrintAndApplyContent', '').then((data: any) => {
      this.content = data.data;
      console.log(this.content)
    })
    .catch((err: any) => {});
  }

  goToProductDetail(id:any){
    let navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    }
    this.router.navigate(['/print-apply-product-detail'], navigationExtras);
  }

  searchTerm: string = '';

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
