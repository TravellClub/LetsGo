import { Component, Input } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';





@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
  public signupForm;

  public user = {};
  langs;
  langform;
  itemList: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, _form: FormBuilder
    , public afDatabase: AngularFireDatabase,public alerCtrl: AlertController) {

    this.itemList = afDatabase.list('/user');
    // this.items = this.itemList.valueChanges();

    this.langform = new FormGroup({
      "langs": new FormControl({ value: 'business', disabled: false })
    })

 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  onSubmit(user) {
    console.log('ionViewDidLoad Signup');
    console.log('User : ', this.user);
    let userRef = this.itemList.push({});

    userRef.set({
      id: userRef.key,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      contact_number: user.contact_number,
      address: user.address,

    });
    let alert = this.alerCtrl.create({
      title: 'Congratulations!',
      message: 'You have signed up successfully',
      buttons: ['Ok']
    });
    alert.present()

    // this.signupForm.reset();




  }



}
