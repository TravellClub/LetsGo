import {Injectable} from '@angular/core';
import {RouteFinder} from "../pages/route-finder/route-finder";
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase} from "angularfire2/database";
import {AlertController} from "ionic-angular";

@Injectable()
export class GlobalProvider {

  public VAR1 = "global var 1";
  public loggedInUser: any = null;

  userList: Observable<any>;

  constructor(public afDatabase: AngularFireDatabase, public alertCtrl: AlertController) {
    console.log('Hello GlobalProvider Provider');
    this.userList = afDatabase.list('/user').valueChanges();
  }

  setLoggedInUser(user) {
    this.loggedInUser = user;
  }

  logUser(username, password){
    this.userList.forEach(element => {
      element.forEach(u => {
        // console.log("user : ", u);
        console.log("check email : ", u.email);
        console.log("check username : ", username);
        if (u.email == username) {
          if (password == u.password) {
            this.setLoggedInUser(u);
            return true;
          } else {
            let alert = this.alertCtrl.create({
              title: 'Oops!',
              message: 'Password is incorrect!',
              buttons: ['Ok']
            });
            alert.present();
            return false;

          }
        }
      });
    });
    let alert = this.alertCtrl.create({
      title: 'Oops!',
      message: 'Username is incorrect!',
      buttons: ['Ok']
    });
    alert.present();
    return false;
  }

  logUserWithDialogue() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username or Email'
        },
        {
          name: 'password',
          placeholder: 'Password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            console.log("GLOBAL : data : ", data);
            let username = data.username;
            let password = data.password;
            this.userList.forEach(element => {
              element.forEach(u => {
                console.log("check email : ", u.email);
                console.log("check username : ", username);
                if (u.email == username) {
                  if (password == u.password) {
                    return true;
                  } else {
                    let alert = this.alertCtrl.create({
                      title: 'Oops!',
                      message: 'Password is incorrect!',
                      buttons: ['Ok']
                    });
                    alert.present();
                    return false;

                  }
                }
              });
            });
            let alert = this.alertCtrl.create({
              title: 'Oops!',
              message: 'Password is incorrect!',
              buttons: ['Ok']
            });
            alert.present();
            return false;
          }
        }
      ]
    });
    prompt.present();
  }

}
