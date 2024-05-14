import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConfigService } from 'src/providers/config/config.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-integra-ultimate',
  templateUrl: './integra-ultimate.component.html',
  styleUrls: ['./integra-ultimate.component.scss']
})
export class IntegraUltimateComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,private location: Location,public config: ConfigService, private router: Router) { }
  id: any;
  product:any = {};
  showbtn = true;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = this.location.getState();
      this.config.getHttp('getAllMarkoprintStandardSystemsById?id=' + this.id.id, '').then((data: any) => {
        this.product = data.data;
        if (this.product.brochure) {
          this.showbtn = false;
          var pdf = document.getElementById("pdf_link") as HTMLAnchorElement | null;
          pdf!.href = this.config.imgUrl + this.product.brochure;
        }
      });
    });
  }

}
