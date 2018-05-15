import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { RouteFinder } from '../route-finder/route-finder';
import { Signup } from '../signup/signup';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
// import { formBuilder } from 
import { Validators,FormBuilder } from '@angular/forms';
// $IMPORTSTATEMENT

/**
 * Generated class for the Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// $IONICPAG
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  itemList: Observable<any>;
  user = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public afDatabase: AngularFireDatabase,public alerCtrl: AlertController, public _form:FormBuilder) {

    

    this.itemList = afDatabase.list('/user').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  onLoginClicked(user) {
    console.log("User login : ", user);
    this.itemList.forEach(element => {
      element.forEach(u => {
        console.log("user : ", u);
        if (u.email == user.username) {
          if (user.password == u.password) {
            this.navCtrl.push(RouteFinder);
          }else{
            let alert = this.alerCtrl.create({
              title: 'Ops!',
              message: 'Password that you enterd is incorrect!',
              buttons: ['Ok']
            });
            alert.present()
          
          }
        }else{
          let alert = this.alerCtrl.create({
            title: 'Ops!',
            message: 'Username that you enterd is incorrect!',
            buttons: ['Ok']
          });
          alert.present()
        }
      })
    })
  }


  openSignup() {
    this.navCtrl.push(Signup);
  }

}
