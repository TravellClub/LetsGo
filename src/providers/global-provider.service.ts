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
  dbUser: AngularFireList<any>;

  itemCat:any;

  constructor(public afDatabase: AngularFireDatabase, public alertCtrl: AlertController) {
    console.log('Hello GlobalProvider Provider');
    this.dbUser = afDatabase.list('/user');
    this.userList = this.dbUser.valueChanges();
  }

  setLoggedInUser(user) {
    console.log("GLOBAL USER : ", user);
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

  logUserWithDialogue(nextPromptAlert) {
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
                console.log("check email : " + u.email + " : " + username);
                console.log("check password : ", u.password + " : " + password);
                if (u.email == username) {
                  if (password == u.password) {
                    this.setLoggedInUser(u);
                    return nextPromptAlert.present();
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
          }
        }
      ]
    });
    prompt.present();
  }


  public addToFavorite(category, object) {
    console.log("Favorite cat : " + category + " id : " ,object);
    let confirm = this.alertCtrl.create({
      title: 'Add to favorite',
      message: 'Do you want to add this to favorites ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('No clicked');
            confirm.dismiss();
            // return false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.afDatabase.list('/user/' + this.loggedInUser.id + '/favorite/' + category)
              .push(object).then(() => {
                console.log("added to favorite");
                confirm.dismiss();
                // return true;
              }
            );

          }
        }
      ]
    });
    // if (this.loggedInUser == null) {
    //   return this.logUserWithDialogue(confirm);
    // } else {
    confirm.present();
    // }
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
