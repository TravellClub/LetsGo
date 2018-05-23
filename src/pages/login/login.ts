import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {RouteFinder} from '../route-finder/route-finder';
import {Signup} from '../signup/signup';
import {AngularFireList, AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {GlobalProvider} from "../../providers/global-provider.service";
import {HomePage} from "../home/home";

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
  nextAction: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public afDatabase: AngularFireDatabase, public alerCtrl: AlertController, public globalProvider: GlobalProvider) {

    this.itemList = afDatabase.list('/user').valueChanges();

    this.nextAction = this.navParams.get("nextAction");
    if (this.nextAction == undefined) {
      this.nextAction = HomePage;
    }
    console.log("LOGIN NEXT : ", this.nextAction);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  onLoginClicked(user) {
    console.log("User login : ", user);
    let items = this.afDatabase.list('/user', ref => ref.orderByChild('email').equalTo(user.username)).valueChanges();

    items.forEach(element => {
      element.forEach((u:{password}) => {
        console.log("LOGIN FOR USE : ", u);
        if (u.password == user.password) {
          this.globalProvider.setLoggedInUser(u);
          this.navCtrl.setRoot(this.nextAction);
        } else {
          let alert = this.alerCtrl.create({
            title: 'Ops!',
            message: 'Password that you entered is incorrect!',
            buttons: ['Ok']
          });
          alert.present();
        }
      });

    }).catch(onerror => {
      let alert = this.alerCtrl.create({
        title: 'Ops!',
        message: 'Username that you entered is not found!',
        buttons: ['Ok']
      });
      alert.present();
    });
  }


  openSignup() {
    this.navCtrl.push(Signup, {
      nextAction: this.nextAction
    });
  }

}
