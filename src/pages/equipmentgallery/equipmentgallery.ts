import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Directions} from '../directions/directions';
import {GlobalProvider} from "../../providers/global-provider.service";
import {CartService} from "../../providers/cart-service";
import {Login} from "../login/login";
import {Equipment} from "../equipment/equipment";
import {Places} from "../places/places";
import {MyProfile} from "../my-profile/my-profile";

@Component({
  selector: 'page-equipmentgallery',
  templateUrl: 'equipmentgallery.html',
})
export class EquipmentGallery {

  category: any;
  items: Observable<any>;
  itemList: AngularFireList<any>;
  public pageTitle: string;

  constructor(public navCtrl: NavController, public afDatabase: AngularFireDatabase, public alertCtrl: AlertController,
              public navParams: NavParams, public  globalProvider: GlobalProvider, public cartService: CartService) {
    this.category = navParams.get("category");
    this.pageTitle = this.category;
    this.category = this.category.toLowerCase();
    let path = '/equipments/' + this.category;
    console.log("Equipment path : " + path);
    this.itemList = afDatabase.list(path);
    this.items = this.itemList.valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Equipment Gallery');
  }

  openMoreDetails() {
    this.navCtrl.push(EquipmentGallery)
  }

  initializeitems() {
    this.itemList = this.itemList;
  }

  openDirections() {
    this.navCtrl.push(Directions,
      {
        destination: {lat: 6.879127, lng: 79.859740}
      });
  }

  opencall() {
    console.log("calling number");
  }

  addTocart(item) {
    this.cartService.addToCart(item);
  }

  getTopics(searchbar) {
    this.initializeitems();
  }

  addEquipment() {
    if (this.globalProvider.loggedInUser == null) {
      this.navCtrl.push(Login, {
        nextAction: Equipment
      });
    }
    else {
      let prompt = this.alertCtrl.create({
        title: 'New ' + this.pageTitle,
        message: "Enter the details of the equipment to add",
        inputs: [
          {
            name: 'itemname',
            placeholder: 'Item Name'
          },
          {
            name: 'price',
            type: 'number',
            placeholder: ' Price'
          },

          {

            name: 'quantity',
            type: 'number',
            placeholder: 'Quantity '
          },
          {

            name: 'image',
            placeholder: 'Image '
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
            text: 'Save',
            handler: data => {
              const newEquipmentRef = this.itemList.push({});

              newEquipmentRef.set({
                id: newEquipmentRef.key,
                itemname: data.itemname,
                price: data.price,
                quantity: data.quantity,
                image: 'assets/img/' + data.image
              });
            }
          }
        ]
      });
      prompt.present();
    }
  }

  addToFavorite(item) {
    if (this.globalProvider.loggedInUser == null) {
      this.navCtrl.push(Login, {
        nextAction: Equipment
      });
    } else {
      this.globalProvider.addToFavorite("Items", item.id, item.itemname);
    }
  }

  openmyProfile() {
    if (this.globalProvider.loggedInUser == null) {
      this.navCtrl.push(Login, {
        nextAction: MyProfile
      });
    } else
      this.navCtrl.push(MyProfile);
  }

}
