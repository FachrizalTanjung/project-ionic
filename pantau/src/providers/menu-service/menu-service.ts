import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  getAllMenusUrl = 'http://taslimrismantoproperty.com/pantau-ws/get-all-menus';
  data: any = {};

  constructor(public http: HttpClient) {
    console.log('Hello MenuService Provider');
  }

  getAllMenus() {
    return new Promise(resolve => {
      this.http.get(this.getAllMenusUrl).subscribe(data => {
        this.data = data;
        resolve(this.data.data);
      }, err => {
        console.log(err);
      });
    });
  }

}
