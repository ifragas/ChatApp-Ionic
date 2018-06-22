import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string ='';
  message: string ='';
  s;
  messages: Object[] = [];

  constructor(public db: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.username);
    this.username = navParams.get('username');
    this.s = this.db.list<Object>('/chat').valueChanges().subscribe( data => {
      this.messages = data;
    })
    
  }

  sendMessage() {
    this.db.list('/chat').push({
      username:this.username,
      message: this.message
    }).then( () => {
      //some text
      console.log('enviado')
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
