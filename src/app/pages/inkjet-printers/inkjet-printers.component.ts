import { Component, AfterViewInit, HostBinding } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-inkjet-printers',
  templateUrl: './inkjet-printers.component.html',
  styleUrls: ['./inkjet-printers.component.scss'],

})
export class InkjetPrintersComponent implements AfterViewInit {

  constructor(public config: ConfigService, private router: Router, private route: ActivatedRoute, private location: Location) { }
  slides: any = [];
  markoprintPremiumSystems: any = [];
  markoprintProfessionalSystems: any = [];
  markoprintStandardSystems: any = [];
  markoprintIqSystemExtensions: any = [];
  imgUrl: string = '';
  benefits: any = {};
  id: any;
  selectedOption = 1;;
  indicatorLeft = 0;
  slideName: string = '';
  brand: string = '';
  ngAfterViewInit(): void {

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
    this.config.getHttp('getAllInkjetPrinterSlider', '').then((data: any) => {
      this.slides = data.data[0];
      this.imgUrl = this.config.imgUrl + this.slides.image
    })
      .catch((err: any) => { });

    this.config.getHttp('getAllMarkoprintPremiumSystems?company_id=' + this.id.id, '').then((data: any) => {
      this.markoprintPremiumSystems = data.data;
      console.log(this.markoprintPremiumSystems)
    })
      .catch((err: any) => { });

    this.config.getHttp('getAllMarkoprintProfessionalSystems?company_id=' + this.id.id, '').then((data: any) => {
      this.markoprintProfessionalSystems = data.data;
      console.log(this.markoprintProfessionalSystems)
    })
      .catch((err: any) => { });

    this.config.getHttp('getAllMarkoprintStandardSystems?company_id=' + this.id.id, '').then((data: any) => {
      this.markoprintStandardSystems = data.data;
      console.log(this.markoprintStandardSystems)
    })
      .catch((err: any) => { });

    this.config.getHttp('getAllMarkoprintIQSystemExtensions?company_id=' + this.id.id, '').then((data: any) => {
      this.markoprintIqSystemExtensions = data.data;
      console.log(this.markoprintIqSystemExtensions)
    })
      .catch((err: any) => { });

    this.config.getHttp('getAllInkjetPrinterBenefits', '').then((data: any) => {
      this.benefits = data.data.description;
    })
      .catch((err: any) => { });

  }

  goToPremiumSystems(id: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    }
    this.router.navigate(['/integra-one'], navigationExtras);
  }
  goToProfessionalSystems(id: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    }
    this.router.navigate(['/ip-jet-hp'], navigationExtras);
  }
  goToStandardSystems(id: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    }
    this.router.navigate(['/integra-ultimate'], navigationExtras);
  }
  goToIQSystemExtensions(id: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    }
    this.router.navigate(['/integra-pp-razr'], navigationExtras);
  }

  selectOption(option: number): void {
    this.selectedOption = option;
    this.updateIndicatorPosition(option);
  }

  updateIndicatorPosition(option: number): void {
    const indicatorWidth = 100 / 4; // Assuming 4 options
    this.indicatorLeft = (option - 1) * indicatorWidth;
  }

  

}
