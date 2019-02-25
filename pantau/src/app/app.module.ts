import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { StudentService } from '../providers/student-service/student-service';
import { SelectLoginPage } from '../pages/select-login/select-login';
import { EventService } from '../providers/event-service/event-service';
import { InformationService } from '../providers/information-service/information-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MenuPage,
    SelectLoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MenuPage,
    SelectLoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StudentService,
    EventService,
    InformationService
  ]
})
export class AppModule { }
