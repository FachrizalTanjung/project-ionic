import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabStudentPage } from './tab-student';

@NgModule({
  declarations: [
    TabStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(TabStudentPage),
  ],
})
export class TabStudentPageModule {}
