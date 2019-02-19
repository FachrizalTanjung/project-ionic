import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { StudentService } from '../../providers/student-service/student-service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-tab-student',
  templateUrl: 'tab-student.html',
})
export class TabStudentPage implements OnInit {

  //Start Membuat parameter yang akan di mapping ke html
  studentForm: FormGroup;
  students: any;
  student = {
    name: '',
    placeOfBirth: '',
    dateOfBirth: '',
    gender: '',
    level: '',
    schoolName: '',
    classroom: ''
  };
  //End Membuat parameter yang akan di mapping ke html

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public studentService: StudentService,
    public formBuilder: FormBuilder,
    public alertController: AlertController) {
  }

  //Start validasi tidak boleh kosong
  ngOnInit() {
    this.studentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      placeOfBirth: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
      schoolName: new FormControl('', Validators.required),
      classroom: new FormControl('', Validators.required)
    });
  }
  //End validasi tidak boleh kosong

  //Start Servis untuk ambil data student
  getStudents() {
    this.studentService.getStudents()
      .then(data => {
        this.students = data;
        console.log(this.students);
      });
  }
  //End Servis untuk ambil data student

  //Start Servis untuk insert data student
  insertStudent() {

    let alert = this.alertController.create({
      title: 'Confirmation',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: data => {
            this.studentService.insertStudent(this.student).then((result) => {
              alert = this.alertController.create({
                subTitle: 'Data has been saved sucessfully',
                buttons: ['OK']
              })
              alert.present();
              this.studentForm.reset();
            }, (err) => {
              console.log(err);
            });
          }
        }
      ]
    });

    alert.present();

  }
  //End Servis untuk insert data student
}
