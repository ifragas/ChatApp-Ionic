import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from './../pages/chat/chat';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';



var config = {
  apiKey: "AIzaSyBqF3I_YbJlOT2z7EwmaKDe_Q66OKk-QhU",
  authDomain: "chat-ionic-66eca.firebaseapp.com",
  databaseURL: "https://chat-ionic-66eca.firebaseio.com",
  projectId: "chat-ionic-66eca",
  storageBucket: "chat-ionic-66eca.appspot.com",
  messagingSenderId: "266746782875"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
