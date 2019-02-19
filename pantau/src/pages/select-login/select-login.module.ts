import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectLoginPage } from './select-login';

@NgModule({
  declarations: [
    SelectLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectLoginPage),
  ],
})
export class SelectLoginPageModule {}
