import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LabelingSystemsComponent } from './pages/labeling-systems/labeling-systems.component';
import { PrintApplyComponent } from './pages/print-apply/print-apply.component';
import { InkjetPrintersComponent } from './pages/inkjet-printers/inkjet-printers.component';
import { IntegraOneComponent } from './pages/integra-one/integra-one.component';
import { IntegraUltimateComponent } from './pages/integra-ultimate/integra-ultimate.component';
import { IpJetHpComponent } from './pages/ip-jet-hp/ip-jet-hp.component';
import { IntegraPpRazrComponent } from './pages/integra-pp-razr/integra-pp-razr.component';
import { SubCategoryComponent } from './pages/sub-category/sub-category.component';
import { PharmaComponent } from './pages/pharma/pharma.component';
import { FoodComponent } from './pages/food/food.component';
import { TeaComponent } from './pages/tea/tea.component';
import { AgroComponent } from './pages/agro/agro.component';
import { PrinterCartridgesComponent } from './pages/printer-cartridges/printer-cartridges.component';
import { InkRollDk1100Component } from './pages/ink-roll-dk1100/ink-roll-dk1100.component';
import { InkRollMy380Component } from './pages/ink-roll-my380/ink-roll-my380.component';
import { ThermalRibbonsComponent } from './pages/thermal-ribbons/thermal-ribbons.component';
import { PrintAndApplyProductDetailComponent } from './pages/print-and-apply-product-detail/print-and-apply-product-detail.component';
import { LabelingSystemsProductsComponent } from './pages/labeling-systems-products/labeling-systems-products.component';
import { LabelingSystemsProductDetailComponent } from './pages/labeling-systems-product-detail/labeling-systems-product-detail.component';
import { ProductCategoriesComponent } from './pages/product-categories/product-categories.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CommingSoonComponent } from './pages/comming-soon/comming-soon.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',

  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',

  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full',

  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    pathMatch: 'full',

  },

  {
    path: 'product_categories',
    component: ProductCategoriesComponent,
    pathMatch: 'full',

  },

  {
    path: 'product-detail',
    component: ProductDetailComponent,
    pathMatch: 'full',

  },
  {
    path: 'comming-soon',
    component: CommingSoonComponent,
    pathMatch: 'full',

  },

  {
    path: 'labeling-systems',
    component: LabelingSystemsComponent,
    pathMatch: 'full',

  },

  {
    path: 'print-apply',
    component: PrintApplyComponent,
    pathMatch: 'full',

  },
  {
    path: 'inkjet-printers',
    component: InkjetPrintersComponent,
    pathMatch: 'full',

  },
  {
    path: 'integra-one',
    component: IntegraOneComponent,
    pathMatch: 'full',

  },
  {
    path: 'integra-ultimate',
    component: IntegraUltimateComponent,
    pathMatch: 'full',

  },
  {
    path: 'ip-jet-hp',
    component: IpJetHpComponent,
    pathMatch: 'full',

  },

  {
    path: 'integra-pp-razr',
    component: IntegraPpRazrComponent,
    pathMatch: 'full',

  },
  {
    path: 'sub-category',
    component: SubCategoryComponent,
    pathMatch: 'full',

  },
  {
    path: 'pharma',
    component: PharmaComponent,
    pathMatch: 'full',

  },
  {
    path: 'food',
    component: FoodComponent,
    pathMatch: 'full',

  },
  {
    path: 'tea',
    component: TeaComponent,
    pathMatch: 'full',

  },
  {
    path: 'agro',
    component: AgroComponent,
    pathMatch: 'full',

  },
  {
    path: 'printer-cartridges',
    component: PrinterCartridgesComponent,
    pathMatch: 'full',

  },
  {
    path: 'ink-roll-dk1100',
    component: InkRollDk1100Component,
    pathMatch: 'full',

  },
  {
    path: 'ink-roll-my380',
    component: InkRollMy380Component,
    pathMatch: 'full',

  },
  {
    path: 'thermal-ribbons',
    component: ThermalRibbonsComponent,
    pathMatch: 'full',
  },
  {
    path: 'print-apply-product-detail',
    component: PrintAndApplyProductDetailComponent,
    pathMatch: 'full',
  },
  {
    path: 'labeling-systems-products',
    component: LabelingSystemsProductsComponent,
    pathMatch: 'full',
  },
  {
    path: 'labeling-systems-product-detail',
    component: LabelingSystemsProductDetailComponent,
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
