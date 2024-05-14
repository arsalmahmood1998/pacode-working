import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

import { LabelingSystemsComponent } from './pages/labeling-systems/labeling-systems.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ConfigService } from 'src/providers/config/config.service';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { PrintAndApplyProductDetailComponent } from './pages/print-and-apply-product-detail/print-and-apply-product-detail.component';
import { LabelingSystemsProductsComponent } from './pages/labeling-systems-products/labeling-systems-products.component';
import { LabelingSystemsProductDetailComponent } from './pages/labeling-systems-product-detail/labeling-systems-product-detail.component';
import { ProductCategoriesComponent } from './pages/product-categories/product-categories.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CommingSoonComponent } from './pages/comming-soon/comming-soon.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    AboutUsComponent,
    LabelingSystemsComponent,
    PrintApplyComponent,
    InkjetPrintersComponent,
    IntegraOneComponent,
    IntegraUltimateComponent,
    IpJetHpComponent,
    IntegraPpRazrComponent,
    SubCategoryComponent,
    PharmaComponent,
    FoodComponent,
    TeaComponent,
    AgroComponent,
    PrinterCartridgesComponent,
    InkRollDk1100Component,
    InkRollMy380Component,
    ThermalRibbonsComponent,
    PrintAndApplyProductDetailComponent,
    LabelingSystemsProductsComponent,
    LabelingSystemsProductDetailComponent,
    ProductCategoriesComponent,
    ProductDetailComponent,
    CommingSoonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbNavModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    ToastrModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  providers: [ ConfigService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
