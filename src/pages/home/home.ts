import { ChatPage } from './../chat/chat';
import { Component } from '@angular/core';
import { NavController , AlertController, ToastController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './../../models/user';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string ='';

  constructor(private afAuth : AngularFireAuth, private toast:ToastController,private alertCtrl: AlertController,
    public navCtrl: NavController,
  ) {

  }

  showAlert(title:string,message:string) {
    const alertBox = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alertBox.present();
  }

  loginUser(){
    if(/^[a-zA-Z0-9]+$/.test(this.username)){
      //all cool
      this.navCtrl.push( ChatPage, {
        username: this.username
      })
    }else{
      this.showAlert('Error','username invalid')
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.afAuth.authState.subscribe(data =>{
      if(data.email && data.uid){
        this.toast.create({
          message: `Login Successful. Welcome ${data.email} !`,
          duration: 4000
        }).present()
      }
      else{
        this.toast.create({
          message: `Error`,
          duration: 3000
        }).present()
      }
    })
  }

}
