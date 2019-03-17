import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GroupServiceProvider } from '../../providers/group-service/group-service';

@IonicPage()
@Component({
  selector: 'page-select-login',
  templateUrl: 'select-login.html',
})
export class SelectLoginPage implements OnInit {

  groupForm: FormGroup;

  group = {
    groupCode: ''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public groupService: GroupServiceProvider,
    public formBuilder: FormBuilder,
    public alertController: AlertController) {
  }

  ngOnInit() {
    this.groupForm = new FormGroup({
      groupCode: new FormControl('', Validators.required)
    });
  }

  directFormLogin(obj) {
    console.log(obj);
    if (obj == 'wali_sekolah') {

    } else if (obj == 'wali_murid') {

    }
    this.navCtrl.push(LoginPage);
  }

  showPrompt() {
    let prompt = this.alertController.create({
      inputs: [
        {
          name: 'title',
          placeholder: 'Masukkan Kode Group'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Bergabung',
          handler: data => {
            if (data.title == '') {
              prompt = this.alertController.create({
                subTitle: 'Harap Mengisi Kode Group',
                buttons: ['OK']
              });
            } else {
              this.groupService.getGroupCodeById(data.title).then((result) => {
                this.navCtrl.push(LoginPage);
              }, (err) => {
                prompt = this.alertController.create({
                  subTitle: 'Kode Grup tidak sesuai',
                  buttons: ['OK']
                })
                prompt.present();
              });
            }
            prompt.present();
          }
        }
      ]
    });
    prompt.present();
  }

}
