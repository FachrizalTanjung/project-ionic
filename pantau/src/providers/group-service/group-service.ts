import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GroupServiceProvider {

  getGroupCodeUrl = 'http://taslimrismantoproperty.com/pantau-ws';
  data: any = {};

  constructor(public http: HttpClient) {
    console.log('Hello GroupServiceProvider Provider');
  }

  getGroupCodeById(data) {

    var headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT",
      "Content-Type": "application/json",
      "Accept": "application/json"
    };

    return new Promise((resolve, reject) => {
      this.http.post(this.getGroupCodeUrl + '/get-group-by-id', data, { headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
