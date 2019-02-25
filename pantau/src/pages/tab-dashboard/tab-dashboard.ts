import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventService } from '../../providers/event-service/event-service';

@IonicPage()
@Component({
  selector: 'page-tab-dashboard',
  templateUrl: 'tab-dashboard.html'
})
export class TabDashboardPage {

  events: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eventService: EventService) {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getAllEvents()
      .then(data => {
        this.events = data;
      });
  }

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
