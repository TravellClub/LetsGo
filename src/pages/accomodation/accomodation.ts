import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Hotels} from '../hotels/hotels';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import {Directions} from "../directions/directions";
import {GlobalProvider} from "../../providers/global-provider.service";
import {Login} from "../login/login";
import {MyProfile} from "../my-profile/my-profile";
import {CallNumber} from "@ionic-native/call-number";
import {Geolocation} from "@ionic-native/geolocation";
import {Places} from "../places/places";

@Component({
  selector: 'page-accomodation',
  templateUrl: 'accomodation.html'
})
export class AccomodationPage {

  items: Observable<any>;
  accommodations: AngularFireList<any>;
  itemList: Array<any>;
  loadedItemList: Array<any>;

  constructor(public navCtrl: NavController, public afDatabase: AngularFireDatabase, public alertCtrl: AlertController,
              public globalProvider: GlobalProvider, public geolocation: Geolocation, public navParams: NavParams) {
    let mode = this.navParams.get('mode');
    console.log("MODE : ", mode);
    if (mode == 'fav') {
      this.accommodations = afDatabase.list('/user/' + this.globalProvider.loggedInUser.id + '/favorite/accommodations');
    } else if (mode == 'add') {
      this.accommodations = afDatabase.list('/user/' + this.globalProvider.loggedInUser.id + '/contributions/accommodations');
    } else
      this.accommodations = afDatabase.list('/accommodations');
    this.items = this.accommodations.valueChanges();
  }

  setupItems() {
    let accommodatio = [];
    this.items.forEach(element => {
      console.log("element : ", element);
      element.forEach(accommo => {
        accommodatio.push(accommo);
        console.log("Accomo ", accommo.id);
      })
    });

    this.itemList = accommodatio;
    this.loadedItemList = accommodatio;
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter Places');
    this.setupItems();
  }

  initializeitems() {
    this.itemList = this.loadedItemList;
  }

  openhotel(item) {
    console.log("pass hotel : ", item);
    this.navCtrl.push(Hotels, {
      "hotel": item
    });
  }


  openDirections() {
    this.navCtrl.push(Directions,
      {
        destination: {lat: 6.879127, lng: 79.859740}
      });
  }

  opencall() {
    console.log("calling number");
    //   this.callNumber.callNumber("0775817987", true)
    //   .then(res => console.log('Launched dialer!', res))
    // .catch(err => console.log('Error launching dialer', err));
  }

  addHotel() {
    let prompt = this.alertCtrl.create({
      title: 'Add New Hotel',
      message: "Add your hotel to our app.",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'address',
          placeholder: 'Address'
        },
        {
          name: 'contact',
          placeholder: 'Contact No'
        }, {
          name: 'website',
          placeholder: 'Website Link'
        },
        {
          name: 'image',
          placeholder: 'Image'
        }
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
            this.geolocation.getCurrentPosition().then((position) => {
              const newHotelRef = this.afDatabase.list('/accommodations').push({});
              let newhotel = {
                id: newHotelRef.key,
                name: data.name,
                address: data.address,
                contact: data.contact,
                image: data.image,
                website: data.website,

                latitiude: position.coords.latitude,
                longitude: position.coords.longitude,
                user: this.globalProvider.loggedInUser.id
              };
              newHotelRef.set(newhotel);

              this.afDatabase.list('/user/' + this.globalProvider.loggedInUser.id + '/contributions/accommodations').set(newHotelRef.key,newhotel);
              this.setupItems()
            });
          }
        }
      ]
    });
    if (this.globalProvider.loggedInUser == null) {
      this.navCtrl.push(Login, {
        nextAction: AccomodationPage
      });
    } else {
      prompt.present();
    }
  }


  edit(accommodation) {

    let prompt = this.alertCtrl.create({
      title: 'Edit hotel',
      message: "Edit a name for this new hotels you're so keen on adding",

      inputs: [

        {
          name: 'name',
          placeholder: 'Name',
          value: accommodation.name

        },

        {
          name: 'address',
          placeholder: 'Address',
          value: accommodation.address

        },

        {
          name: 'contact',
          placeholder: 'Contact No',
          value: accommodation.contact

        },
        {
          name: 'image',
          placeholder: 'Image',
          value: accommodation.image

        },


      ],

      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("cancel clicked");
          }

        },

        {
          text: "Save Hotels",
          handler: data => {
            let newname: String = data.name;
            let newaddress: String = data.address;
            let newcontact: String = data.contact;
            let newimage: String = data.image;

            if (data.name != '') {

              newname = data.name;

            }
            if (data.address != '') {

              newaddress = data.address;

            }

            if (data.phonenumber != '') {

              newcontact = data.contact;

            }
            if (data.image != '') {

              newimage = data.image;

            }

            console.log("edit hotel : accommodation key : ", accommodation.id);
            console.log("edit hotel : accommodation : ", accommodation);
            this.accommodations.update(accommodation.id, {
              name: newname,
              address: newaddress,
              contact: newcontact,
              image: newimage,
              user: this.globalProvider.loggedInUser.id

            });
            this.setupItems();

          }
        }
      ]

    });

    prompt.present();


  }


  getTopics(searchbar) {
    this.initializeitems();

    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;


    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

    this.itemList = this.itemList.filter((v) => {
      if (v.address && q) {
        if (v.address.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    console.log(q, this.itemList.length);

  }

  addToFavorite(hotel) {
    console.log("Favorite click : ", hotel.name);
    console.log("Favorite click user : ", this.globalProvider.loggedInUser);

    if (this.globalProvider.loggedInUser == null) {
      this.navCtrl.push(Login, {
        nextAction: AccomodationPage
      });
    } else {
      this.globalProvider.addToFavorite("accommodations", hotel);
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

  delete(itemID){
    let prompt = this.alertCtrl.create({
      title: 'Delete Accommodation',

      buttons: [{
        text: "Cancel",
        handler: data => {
          console.log("Cancel Clicked");
        }
      },
        {
          text: "Delete",
          handler: data => {
            this.accommodations.remove(itemID);
            this.setupItems();
          }

        }
      ]
    });
    prompt.present();
  }
}
