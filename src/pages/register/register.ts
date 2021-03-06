import { LoginPage } from './../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private afAuth : AngularFireAuth, 
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User){
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password );
      console.log(result);      
      this.navCtrl.push(LoginPage);       
    }
     catch (e) {
       console.error(e);
     }
  }  

  

}
