import { Component, AfterViewInit } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
import { NavigationExtras, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  breakpoint!: number;
  breakpointTwo!: number;
  public slides:any = [];
  public printers:any = [];
  public comapnyInfo:any = {};
  public clients:any = {};
  public premiumPrinters:any = [];
  public iqPrinters:any = [];
  public professionalPrinters:any = [];
  public standardPrinters:any = [];
  public labelingSystemsCategories:any = [];
  public printAndApply:any = [];
  public consumables:any = [];
  public industry:any = [];
  public groupedImages:any = [];
  public images:any = 
  [
    '../../../assets/images/area-nineteen.jpg',
    '../../../assets/images/area-one.jpg',
    '../../../assets/images/area-five.png',
    '../../../assets/images/area-eight.png',
    '../../../assets/images/area-ten.png',
    '../../../assets/images/area-twenty.jpg',
    '../../../assets/images/area-twelve.png',
    '../../../assets/images/area-thirteen.png',
    '../../../assets/images/area-fourteen.png',
    '../../../assets/images/area-fifteen.png',
    '../../../assets/images/area-seventeen.png',
    '../../../assets/images/area-eighteen.png',
  ]

  constructor(
    public config: ConfigService, private router: Router, private modalService: NgbModal
  ) { }
  openCarouselModal(content: any) {
    console.log('aya')
    this.modalService.open(content, { centered: true , size:'xl'}).result.then(
      (result) => {
        // Modal closed
        document.body.classList.remove('dull-background');
      },
      (reason) => {
        // Modal dismissed
        document.body.classList.remove('dull-background');
      }
    );
    // Add class to body when modal opens
    document.body.classList.add('dull-background');
  
}



  ngAfterViewInit(): void {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 2;

    this.breakpointTwo = window.innerWidth <= 400 ? 1 : 4;
    
    this.config.getHttp('getAllHomePageSlider', '').then((data: any) => {
      this.slides = data.data;
    })
    .catch((err: any) => {});

    this.config.getHttp('getAllHomePagePrinter', '').then((data: any) => {
      this.printers = data.data;
    })
    .catch((err: any) => {});

    this.config.getHttp('getAllCompanyStats', '').then((data: any) => {
      this.comapnyInfo = data.data;
    })
    .catch((err: any) => {});

    this.config.getHttp('getAllWhatClientsSay', '').then((data: any) => {
      this.clients = data.data;
    })
    .catch((err: any) => {});
    this.config.getHttp('getTopThreeInkJetPrinters?name=premium', '').then((data: any) => {
      this.premiumPrinters = data.data;
    })
    .catch((err: any) => {});

    this.config.getHttp('getTopThreeInkJetPrinters?name=professional', '').then((data: any) => {
      this.professionalPrinters = data.data;
    })
    .catch((err: any) => {});

    this.config.getHttp('getTopThreeInkJetPrinters?name=standard', '').then((data: any) => {
      this.standardPrinters = data.data;
    })
    .catch((err: any) => {});

    this.config.getHttp('getTopThreeInkJetPrinters?name=iq', '').then((data: any) => {
      this.iqPrinters = data.data;
    })
    .catch((err: any) => {});

    this.config.getHttp('getAllLabelingSystemsCategories', '').then((data: any) => {
      this.labelingSystemsCategories = data.data;
    })
    .catch((err: any) => {});
    this.config.getHttp('getPrintAndApplyProducts', '').then((data: any) => {
      this.printAndApply = data.data;
    })

    this.config.getHttp('getAllLabelingSystemsCategories', '').then((data: any) => {
      this.labelingSystemsCategories = data.data.slice(0,3);
    })
    .catch((err: any) => {});
    this.config.getHttp('getPrintAndApplyProducts', '').then((data: any) => {
      this.printAndApply = data.data.slice(0,3);
    })

    this.config.getHttp('getAllConsumablesProducts', '').then((data: any) => {
      this.consumables = data.data;
    })
    .catch((err: any) => {});
    this.config.getHttp('getAllIndustryProducts', '').then((data: any) => {
      this.industry = data.data;
      this.groupImages(this.industry, 3);
    })
  }

  groupImages(images: any[], groupSize: number): any[][] {
    for (let i = 0; i < images.length; i += groupSize) {
      this.groupedImages.push(images.slice(i, i + groupSize));
    }
    return this.groupedImages;
  }



  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 3;
  }

  onResizeTwo(event: any) {
    this.breakpointTwo = event.target.innerWidth <= 600 ? 1 : 4;
  }

  goToPremiumSystems(id:any){
    let navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    }
    this.router.navigate(['/integra-one'], navigationExtras);
  }
  goToProfessionalSystems(id:any){
    let navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    }
    this.router.navigate(['/ip-jet-hp'], navigationExtras);
  }
  goToStandardSystems(id:any){
    let navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    }
    this.router.navigate(['/integra-ultimate'], navigationExtras);
  }
  goToIQSystemExtensions(id:any){
    let navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    }
    this.router.navigate(['/integra-pp-razr'], navigationExtras);
  }

  goToProductDetail(id:any){
    let navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    }
    this.router.navigate(['/print-apply-product-detail'], navigationExtras);
  }

  goToLabellingProducts(id:any){
    let navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    }
    this.router.navigate(['/labeling-systems-products'], navigationExtras);
  }

  goToInkjetPrinter(id:any){
    let navigationExtras: NavigationExtras = {
      state: {
        id: id,
        printer:'inkjet'
      }
    }
    this.router.navigate(['/inkjet-printers'], navigationExtras);
  }

  goToLabellingSystems(id:any){
    let navigationExtras: NavigationExtras = {
      state: {
        id: id,
        printer:'labelling'
      }
    }
    this.router.navigate(['/labeling-systems'], navigationExtras);
  }

  goToPrintAndApply(id:any){
    let navigationExtras: NavigationExtras = {
      state: {
        id: id,
        printer:'printAndApply'
      }
    }
    this.router.navigate(['/print-apply'], navigationExtras);
  }

}
