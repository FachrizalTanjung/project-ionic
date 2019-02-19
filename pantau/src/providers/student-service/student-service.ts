import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudentService {

  studentUrl = 'http://localhost:8082/pantau/rest/student';

  constructor(public http: HttpClient) {
    console.log('Hello StudentServiceProvider Provider');
  }

  getStudents() {
    return new Promise(resolve => {
      this.http.get(this.studentUrl + '/all').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  insertStudent(data) {

    var headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT",
      "Content-Type": "application/json",
      "Accept": "application/json"
    };

    return new Promise((resolve, reject) => {
      this.http.post(this.studentUrl + '/insert', JSON.stringify(data), {headers})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
