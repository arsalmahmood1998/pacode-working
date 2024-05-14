import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  content:any = {};
  team:any = {};
  constructor(public config: ConfigService) { }

  ngOnInit(): void {
    this.config.getHttp('getAllAboutUsContent', '').then((data: any) => {
      this.content = data.data;
      console.log(this.content);
    })
    .catch((err: any) => {});

    this.config.getHttp('getAllOurTeam', '').then((data: any) => {
      this.team = data.data;
      console.log(this.team);
    })
    .catch((err: any) => {});
  }

}
