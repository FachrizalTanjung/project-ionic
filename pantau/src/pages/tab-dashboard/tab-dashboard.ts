import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventService } from '../../providers/event-service/event-service';
import { InformationService } from '../../providers/information-service/information-service';

@IonicPage()
@Component({
  selector: 'page-tab-dashboard',
  templateUrl: 'tab-dashboard.html'
})
export class TabDashboardPage {

  events: any;
  informations: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eventService: EventService,
    public informationService: InformationService) {
    this.getAllEvents();
    this.getAllInformations();
  }

  getAllEvents() {
    this.eventService.getAllEvents()
      .then(data => {
        this.events = data;
      });
  }

  getAllInformations() {
    this.informationService.getAllInformations()
      .then(data => {
        this.informations = data;
      });
  }

  // informations = [
  //   {
  //     title: 'Pengumuman Kelulusan Peserta Didik',
  //     createDate: 'Monday, 25 Dec 2018 | 14.00'
  //   },
  //   {
  //     title: 'Informasi Perubahan Jadwal Pelajaran',
  //     createDate: 'Monday, 25 Dec 2018 | 14.00'
  //   }
  // ];

}
