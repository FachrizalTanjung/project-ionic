import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultsPage } from './consults';

@NgModule({
  declarations: [
    ConsultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultsPage),
  ],
})
export class ConsultsPageModule {}
