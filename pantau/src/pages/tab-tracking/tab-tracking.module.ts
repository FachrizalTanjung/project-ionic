import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabTrackingPage } from './tab-tracking';

@NgModule({
  declarations: [
    TabTrackingPage,
  ],
  imports: [
    IonicPageModule.forChild(TabTrackingPage),
  ],
})
export class TabTrackingPageModule {}
