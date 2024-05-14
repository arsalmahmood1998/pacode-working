import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConfigService } from 'src/providers/config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-printer-cartridges',
  templateUrl: './printer-cartridges.component.html',
  styleUrls: ['./printer-cartridges.component.scss']
})
export class PrinterCartridgesComponent implements OnInit {
  id: any;
  products: any = [];
  pageTitle: string = '';
  imgUrl: string = '';
  slides: any = [];
  searchTerm: string = '';
  filteredData:any = [];
  constructor(private route: ActivatedRoute, private location: Location, public config: ConfigService, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = this.location.getState();


      this.config.getHttp('getAllConsumablesProductsByCategoryId?id=' + this.id.id, '').then((data: any) => {
        this.products = data.data;
        this.filteredData = this.products;
        if (this.products === 'No Data Found') {
          this.router.navigate(['/home']);
        }
      });

      this.config.getHttp('getConsumablesCategoriesById?id=' + this.id.id, '').then((data: any) => {
        this.pageTitle = data.data.name;
      });

      this.config.getHttp('getAllInkjetPrinterSlider', '').then((data: any) => {
        this.slides = data.data[0];
        this.imgUrl = this.config.imgUrl + this.slides.image
      })
        .catch((err: any) => { });
    });
  }

  filterProducts(): void {
    if (this.searchTerm.trim() !== '') {
      this.filteredData = this.products.filter((category: { name: string; }) =>
      category.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredData = this.products;
    }
  }



}
