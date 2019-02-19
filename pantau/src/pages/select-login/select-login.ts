import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-select-login',
  templateUrl: 'select-login.html',
})
export class SelectLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  directFormLogin(obj) {
    console.log(obj);
    if (obj == 'wali_sekolah') {

    } else if (obj == 'wali_murid') {

    }
    this.navCtrl.push(LoginPage);
  }

}
