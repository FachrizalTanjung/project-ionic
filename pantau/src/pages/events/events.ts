import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventService } from '../../providers/event-service/event-service';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  events: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eventService: EventService) {
      this.getAllEvents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  getAllEvents() {
    this.eventService.getAllEvents()
      .then(data => {
        this.events = data;
      });
  }

}
