import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabDashboardPage } from './tab-dashboard';

@NgModule({
  declarations: [
    TabDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(TabDashboardPage),
  ],
})
export class TabDashboardPageModule {}
