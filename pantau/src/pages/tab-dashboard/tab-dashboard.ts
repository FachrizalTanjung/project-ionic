import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tab-dashboard',
  templateUrl: 'tab-dashboard.html'
})
export class TabDashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  events = [
    {
      title: 'Pengenalan Lingkungan',
      description: 'Desc Pengenalan Lingkungan',
      img: 'assets/images/pengenalan-lingkungan.jpg'
    },
    {
      title: 'Sosialisasi',
      description: 'Desc Sosialisasi',
      img: 'assets/images/sosialisasi.jpg'
    }
  ];

  informations = [
    {
      title: 'Pengumuman Kelulusan Peserta Didik',
      createDate: 'Monday, 25 Dec 2018 | 14.00'
    },
    {
      title: 'Informasi Perubahan Jadwal Pelajaran',
      createDate: 'Monday, 25 Dec 2018 | 14.00'
    }
  ];

}
