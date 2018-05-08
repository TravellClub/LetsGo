import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';





@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
   public signupForm;

   langs;
   langform;

  constructor(public navCtrl: NavController, public navParams: NavParams, _form:FormBuilder) {

    // this.signupForm = this.signupForm.group({
    //   "email":["",Validators.required],
    //   "password":["",Validators.required]
    // })

    this.langform = new FormGroup({
      "langs": new FormControl({value: 'business', disabled:false})
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }



}
