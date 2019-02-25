import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

  getAllEventsUrl = 'http://taslimrismantoproperty.com/pantau-ws/get-all-events';
  data : any = {};

  constructor(public http: HttpClient) {
    console.log('Hello EventService Provider');
  }

  getAllEvents() {
    return new Promise(resolve => {
      this.http.get(this.getAllEventsUrl).subscribe(data => {
        this.data = data;
        resolve(this.data.data);
      }, err => {
        console.log(err);
      });
    });
  }

}
