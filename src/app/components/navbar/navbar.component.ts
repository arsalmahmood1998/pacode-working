import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  categories:any=[];
  subCategories:any=[];
  industry:any = [];
  constructor(public config: ConfigService, private router: Router) { }

  ngOnInit(): void {
    this.config.getHttp('getAllProductsCategories', '').then((data: any) => {
      this.categories = data.data;
    });

    this.config.getHttp('getAllProductsSubCategories', '').then((data: any) => {
      this.subCategories = data.data;
    });
  }

  goToProductCategories(category_id:any, subCategoryId:any){
    let navigationExtras: NavigationExtras = {
      state: {
        category_id: category_id,
        subCategoryId:subCategoryId
      }
    }
    this.router.navigateByUrl('/home').then(() => {
      this.router.navigate(['/product_categories'], navigationExtras);
    });
  }

  hasSubCategories(categoryId: any): boolean {
    return this.subCategories.some((subCategory: { category_id: any; }) => subCategory.category_id === categoryId);
  }

  goToComingSoon(category_id:any){
    if(this.hasSubCategories(category_id) == true){
      return
    }
    else{
      this.router.navigate(['/comming-soon']);
    }
  }

  gotToConsumablesCategories(id:any) {
    let navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    }
    this.router.navigateByUrl('/home').then(() => {
      this.router.navigate(['/printer-cartridges'], navigationExtras);
    });
  }

  gotIndustryCategories(id:any) {
    let navigationExtras: NavigationExtras = {
      state: {
        id: id
      }
    }
    this.router.navigateByUrl('/home').then(() => {
      this.router.navigate(['/pharma'], navigationExtras);
    });
  }

  goToInkjetPrinter(id:any){
    let navigationExtras: NavigationExtras = {
      state: {
        id: id,
        printer:'inkjet'
      }
    }
    this.router.navigateByUrl('/home').then(() => {
      this.router.navigate(['/inkjet-printers'], navigationExtras);
    });
  }

  goToLabellingSystems(id:any){
    let navigationExtras: NavigationExtras = {
      state: {
        id: id,
        printer:'labelling'
      }
    }
    this.router.navigateByUrl('/home').then(() => {
      this.router.navigate(['/labeling-systems'], navigationExtras);
    });
  }

  goToPrintAndApply(id:any){
    let navigationExtras: NavigationExtras = {
      state: {
        id: id,
        printer:'printAndApply'
      }
    }
    this.router.navigateByUrl('/home').then(() => {
      this.router.navigate(['/print-apply'], navigationExtras);
    });
    //this.router.navigate(['/print-apply'], navigationExtras);
  }
  

}
