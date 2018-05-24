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
import {EquipmentCart} from "../equipment-cart/equipment-cart";

@Component({
  selector: 'page-equipmentgallery',
  templateUrl: 'equipmentgallery.html',
})
export class EquipmentGallery {

  category: any;
  items: Observable<any>;
  equipments: AngularFireList<any>;
  public pageTitle: string;
  itemsList: Array<any>;
  loaditemsList: Array<any>;

  constructor(public navCtrl: NavController, public afDatabase: AngularFireDatabase, public alertCtrl: AlertController,
              public navParams: NavParams, public  globalProvider: GlobalProvider, public cartService: CartService) {
    this.category = navParams.get("category");
    console.log("Equipment cat : " + this.category);
    if(this.category != undefined) {
      this.pageTitle = this.category;
      this.category = this.category.toLowerCase();
    }else{
      this.navCtrl.setRoot(Equipment);
    }
    let path = '/equipments/' + this.category;
    console.log("Equipment path : " + path);
    let mode = this.navParams.get('mode');
    if (mode == 'fav') {
      path = '/user/' + this.globalProvider.loggedInUser.id + '/favorite/equipments/' + this.category;
    }
    this.equipments = afDatabase.list(path);
    this.items = this.equipments.valueChanges();

    this.setupItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Equipment Gallery');
  }

  openMoreDetails() {
    this.navCtrl.push(EquipmentGallery)
  }

  setupItems() {
    let equip = [];
    this.items.forEach(element => {
      element.forEach(eq => {
        equip.push(eq);
        console.log("Eq", eq);
      })
    });

    this.itemsList = equip;
    this.loaditemsList = equip;
  }

  initializeitems() {
    this.itemsList = this.loaditemsList;
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


  getTopics(searchbar) {
    this.initializeitems();
    // set s to the value of the searchbar
    var s = searchbar.target.value;

    // if the value is an empty string don't filter the items
    if (!s) {
      return;
    }

    this.itemsList = this.itemsList.filter((a) => {
      if (a.itemname && s) {
        if (a.itemname.toLowerCase().indexOf(s.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    console.log(this.itemsList.length);
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
              const newEquipmentRef = this.equipments.push({});

              newEquipmentRef.set({
                id: newEquipmentRef.key,
                itemname: data.itemname,
                price: data.price,
                quantity: data.quantity,
                image: 'assets/img/' + data.image,
                user: this.globalProvider.loggedInUser.id
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
      this.globalProvider.addToFavorite("equipments/" + this.category, item);
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

  addTocart(item) {
    if (item.buyingQty > 0) {
      this.cartService.addToCart(item);
    }
  }

  checkoutCart() {
    if (this.globalProvider.loggedInUser == null) {
      this.navCtrl.push(Login, {
        nextAction: EquipmentCart,
        mode: "push"
      });
    } else
      this.navCtrl.push(EquipmentCart);
  }

  checkCart() {
    return (this.cartService.getCartCount() > 0);
  }

  delete(itemID){
    let prompt = this.alertCtrl.create({
      title: 'Delete Item',

      buttons: [{
        text: "Cancel",
        handler: data => {
          console.log("Cancel Clicked");
        }
      },
        {
          text: "Delete",
          handler: data => {
            this.equipments.remove(itemID);
            this.setupItems();
          }

        }
      ]
    });
    prompt.present();
  }

}
