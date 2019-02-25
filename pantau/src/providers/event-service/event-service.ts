import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

  getAllEventsUrl = 'http://taslimrismantoproperty.com/pantau-ws/get-all-events';

  constructor(public http: HttpClient) {
    console.log('Hello EventService Provider');
  }

  getAllEvents() {
    console.log('masuk');
    return new Promise(resolve => {
      this.http.get(this.getAllEventsUrl).subscribe(data => {
        resolve(data.data);
      }, err => {
        console.log(err);
      });
    });
  }

}
