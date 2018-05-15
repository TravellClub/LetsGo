import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { Hotels } from '../hotels/hotels';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";
import { Directions } from "../directions/directions";
import firebase from 'firebase';
import { Reference } from '@firebase/database';
import { key } from 'localforage';

@Component({
  selector: 'page-accomodation',
  templateUrl: 'accomodation.html'
  //templateUrl: 'build/pages/search/search.html',
})
export class AccomodationPage {

  alertctrl: any;
  items: Observable<any>;
  accommodations: AngularFireList<any>;
  itemList: Array<any>;
  loadedItemList: Array<any>;

  constructor(public navCtrl: NavController, public afDatabase: AngularFireDatabase, public alertCtrl: AlertController) {
    this.accommodations = afDatabase.list('/accommodations');
    this.items = this.accommodations.valueChanges();
    this.setupItems()
  }

setupItems(){
  let accommodatio = [];
    this.items.forEach(element => {
      element.forEach(accommo => {
        accommodatio.push(accommo);
        console.log("Accomo ", accommo);
      })
    });

    this.itemList = accommodatio;
    this.loadedItemList = accommodatio;
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
        destination: { lat: 6.879127, lng: 79.859740 }
      });
  }

  opencall() {
    console.log("calling number");
    //   this.callNumber.callNumber("0775817987", true)
    //   .then(res => console.log('Launched dialer!', res))
    // .catch(err => console.log('Error launching dialer', err));
  }

  // loadData(){
  //   console.log("Loading accommodation data");
  //     items = [{
  //       name : "Hotel Name",
  //       address : "Address of the hotel",
  //       contact : "0711225544",
  //       rating : 5.0,
  //       image : "\\assets\\img\\1446529061Buffet_Restaurant.jpg"
  //     },
  // {
  //       name : "Hotel 2",
  //       address : "Address of the hotel 2",
  //       contact : "0777445555",
  //       rating : 4.0,
  //       image : "\\assets\\img\\home1.jpg"
  //     }
  //     ];
  //     console.log("items : " + this.items);
  // }

  ionViewDidLoad() {
    console.log("Accommodation view did load");
    // this.loadData();
  }

  addHotel() {
    let prompt = this.alertCtrl.create({
      title: 'Hotels Name',
      message: "Enter a name for this new hotels you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
        {
          name: 'address',
          placeholder: ' Address'
        },
        {

          name: 'phonenumber',
          placeholder: ' Contact '
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
            const newHotelRef = this.accommodations.push({});

            newHotelRef.set({
              id: newHotelRef.key,
              name: data.title,
              address: data.address,
              contact: data.phonenumber,
             // image: "\\assets\\img\\1446529061Buffet_Restaurant.jpg"
             image:"assets/img/"+ data.image
            });
            this.setupItems()
          }
        }
      ]
    });
    prompt.present();
  }

  

 edit(accommodations):void {
    
    let prompt=this.alertctrl.create({
      title:'Edit hotels',
      message:"Edit a name for this new hotels you're so keen on adding",
    
    inputs:[
       
       {
          name:'title',
          placeholder:accommodations.title

       },

        {
          name:'address',
          placeholder:accommodations.address

       },
       
       {
        name:'phonenumber',
        placeholder:accommodations.phonenumber

     },
     {
      name:'image',
      placeholder:accommodations.image

   },
   

    ],

    buttons:[
         {
             text:"Cancel",
             handler:data => {
                 console.log("cancel clicked"); }

         },

         {
           text:"Save Hotels",
             handler:data => {
                 let newtitle  : String =  data.title;
                 let newaddress : String =  data.address;
                 let newphone  : String =  data.phonenumber;
                 let newimage : String =  data.image;

                   if(data.title != ''){

                       newtitle = data.title;

                   }
                      if(data.address != ''){

                       newaddress = data.address;

                   }
                   
                   if(data.phonenumber != ''){

                    newphone = data.phonenumber;

                }
                   if(data.image != ''){

                    newimage = data.image;

                }

                    this.accommodations.update(accommodations.$key, {
                       title:data.title,
                       address:data.address,
                       phonenumber:data.phonenumber,
                       image:data.image

                  });

            }
         }
    ]
       
   });
    
prompt.present();

}



  getTopics(searchbar){
    this.initializeitems();

    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
  
  
    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
  
    this.itemList = this.itemList.filter((v) => {
      if(v.address && q) {
        if (v.address.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  
    console.log(q, this.itemList.length);
  
  }
  public Clicked: boolean = false; //Whatever you want to initialise it as

  public Click() {

      this.Clicked = !this.Clicked;
  }
  
}
