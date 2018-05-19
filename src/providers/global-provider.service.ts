import {Injectable} from '@angular/core';
import {RouteFinder} from "../pages/route-finder/route-finder";
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {AlertController} from "ionic-angular";
import {catchError} from "rxjs/operators";

@Injectable()
export class GlobalProvider {

  public VAR1 = "global var 1";
  public loggedInUser: any = null;

  userList: Observable<any>;
  dbUser: AngularFireList<any>

  constructor(public afDatabase: AngularFireDatabase, public alertCtrl: AlertController) {
    console.log('Hello GlobalProvider Provider');
    this.dbUser = afDatabase.list('/user');
    this.userList = this.dbUser.valueChanges();
  }

  setLoggedInUser(user) {
    this.loggedInUser = user;
  }

  logUser(username, password) {
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

  logUserWithDialogue(functionAfter) {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username or Email'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
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
                    functionAfter();

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
              message: 'User is incorrect!',
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


  public addToFavorite(category, objectId) {
    console.log("Favorite cat : " + category + " id : " + objectId);
    if (this.loggedInUser == null) {
      this.logUserWithDialogue(this.addToFavoriteDB(category, objectId));

    } else {
      this.addToFavoriteDB(category, objectId);
    }
  }

  addToFavoriteDB(category, objectId) {
    const favoriteRef = this.afDatabase.list('/user/' + this.loggedInUser.id + '/favorite').push({});
    favoriteRef.set({
      id: favoriteRef.key,
      category: category,
      contentId: objectId
    });
  }
}
