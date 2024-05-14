import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public config: ConfigService) { }
  public comapnyInfo:any = {};

  ngOnInit(): void {
    this.config.getHttp('getAllCompanyInformation', '').then((data: any) => {
      this.comapnyInfo = data.data;
    })
    .catch((err: any) => {});
  }

}
