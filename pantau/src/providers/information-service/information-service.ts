import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class InformationService {

  getAllInformationsUrl = 'http://taslimrismantoproperty.com/pantau-ws/get-all-informations';
  data: any = {};

  constructor(public http: HttpClient) {
    console.log('Hello InformationServiceProvider Provider');
  }

  getAllInformations() {
    return new Promise(resolve => {
      this.http.get(this.getAllInformationsUrl).subscribe(data => {
        this.data = data;
        resolve(this.data.data);
      }, err => {
        console.log(err);
      });
    });
  }

}
