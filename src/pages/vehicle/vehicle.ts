import { Component,Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-vehicle',
  templateUrl: 'vehicle.html'
})
export class VehiclePage {

  constructor(public navCtrl: NavController) {

  }

  // addGlobalVar(varName: string, value: any): void {
  //   this._vars.push({
  //   name: varName,
  //   value: value
  // });
  // };

}

// export class Globalvars{

//   constructor(){
//     this.MyGlobalVar="";
//   }

//   setMyGlobalVar(value){
//     this.MyGlobalVar=var;
//   }

//   getMyGlobalVar(){
//     return this.MyGlobalVar;
//   }
// }