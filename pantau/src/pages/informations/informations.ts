import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformationService } from '../../providers/information-service/information-service';

@IonicPage()
@Component({
  selector: 'page-informations',
  templateUrl: 'informations.html',
})
export class InformationsPage {

  informations: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public informationService: InformationService) {
      this.getAllInformations();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationsPage');
  }

  getAllInformations() {
    this.informationService.getAllInformations()
      .then(data => {
        this.informations = data;
      });
  }

}
