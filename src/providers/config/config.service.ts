
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Injectable()

export class ConfigService {
  //public yourSiteUrl: string = 'https://localhost/pacode/api/';
  public yourSiteUrl: string = 'https://passdoneadmin.zmsoft.co/api/';
  public oldSiteUrl: string = 'https://api.paletteedu.app/endpoints/public/api/';
 
  public url: string = this.yourSiteUrl + '/api/';
  //public imgUrl: string = 'https://localhost/pacode/';
  public imgUrl: string = 'https://passdoneadmin.zmsoft.co/';
  constructor(
    public http: HttpClient,
    private toastr: ToastrService
  ) {
    
  }
  oldgetHttp(req:any,data:any) {
    return new Promise(resolve => {
        this.http.get(this.oldSiteUrl + req, data).subscribe((data: any) => {
          resolve(data);
        }, (err) => {
          console.log("Error : " + req);
          console.log(err);
        });
    });
  }
  getHttp(req:any,data:any) {
    return new Promise((resolve,reject) => {
        this.http.get(this.yourSiteUrl + req, data).subscribe((data: any) => {
          resolve(data);
        }, (err:any) => {
          this.toastDanger(err.error.message);
          reject(err.error);
        });
   
    });
  }

  postHttp(req:any, data:any) {
    return new Promise(resolve => {
        this.http.post(this.yourSiteUrl + req, data).subscribe((data: any) => {
          resolve(data);
        }, (err) => {
          this.toastDanger(err.error.message);
        });
    });
  }
  patchHttp(req:any, data:any) {
    return new Promise(resolve => {
        this.http.patch(this.yourSiteUrl + req, data).subscribe((data: any) => {
          resolve(data);
        }, (err) => {
          this.toastDanger(err.error.message);
        });
    });
  }
  putHttp(req: any, data: any) {
    let d = new Date();

    return new Promise((resolve) => {
      this.http.put(this.yourSiteUrl + req, data).subscribe(
        (data: any) => {
          resolve(data);
        },
        (err) => {
          this.toastDanger(err.error.message);
        }
      );
    });
  }
   deleteHttp(req: any) {
    return new Promise((resolve) => {
      this.http.delete(this.yourSiteUrl + req).subscribe(
        (data: any) => {
          resolve(data);
        },
        (err) => {
          this.toastDanger(err.error.message);
        }
      );
    });
  }
  toastSuccess(msg:any){
    this.toastr.success(msg,'', {
      timeOut: 1000,
    });
  }
  toastDanger(msg:any){
    this.toastr.error(msg,'', {
      timeOut: 3000,
    });
  }
  
}