import { Component, Input } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Validation } from '../validation/validation';
import {HomePage} from "../home/home";
import {GlobalProvider} from "../../providers/global-provider.service";





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
  myControl;
  nextAction:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public _form: FormBuilder
    , public afDatabase: AngularFireDatabase,public alerCtrl: AlertController, public globalProvider: GlobalProvider) {


    this.signupForm = this._form.group({
      "fistname":["",Validators.required],
      "lastname":["",Validators.required],
      "email":["",Validators.required],
      "password":["",Validators.required],
      "role":["",Validators.required],
      "contactnumber":["",Validators.required],
      "address":["",Validators.required],

    })

    this.itemList = afDatabase.list('/user');
    // this.items = this.itemList.valueChanges();

    this.langform = new FormGroup({
      "langs": new FormControl({ value: 'business', disabled: false })
    })
    this.nextAction = this.navParams.get("nextAction");
    if(this.nextAction==undefined){
      this.nextAction = HomePage;
    }



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  onSubmit(user) {
    console.log('ionViewDidLoad Signup');
    console.log('User : ', this.user);
    let userRef = this.itemList.push({});

    let userdata = {
      id: userRef.key,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      contact_number: user.contact_number,
      address: user.address,

    };
    userRef.set(userdata);
    this.globalProvider.setLoggedInUser(userdata);
    let alert = this.alerCtrl.create({
      title: 'Congratulations!',
      message: 'You have signed up successfully',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.navCtrl.setRoot(this.nextAction);
        }
      }]
    });
    alert.present()
  }
}
