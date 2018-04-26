import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Tools } from '../tools/tools';
import { Books } from '../books/books';
import { Statues } from '../statues/statues';
import { Accesories } from '../accesories/accesories';
import { Textiles } from '../textiles/textiles';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Itemlist } from '../itemlist/itemlist';


// $IMPORTSTATEMENT

/**
 * Generated class for the Equipment page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// $IONICPAGE
@Component({
  selector: 'page-equipment',
  templateUrl: 'equipment.html',
})
export class Equipment {

  
  list: any;
  equipmentlist: AngularFireList<any>;
  constructor(public navCtrl: NavController,public afDatabase: AngularFireDatabase, public navParams: NavParams, public alertCrtl : AlertController) {
    this.equipmentlist = afDatabase.list('/equipment');
    this.list =this.equipmentlist.valueChanges();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Equipment');
  }
  additem()
  {
    let prompt = this.alertCrtl.create({
       title:'sales items',
       inputs:[
        {
            name:'Itemname',
            placeholder:'ItemName'
        },
        {
           name:'itemprice',
          placeholder:'ItemPrice'
        },
        {
          name:'quantity',
          placeholder:'Quantity'
        },
        {
          name:'image',
          placeholder:'Image'

        },
        ],
        buttons:[
          {
            text:'cancel',
            handler:data =>{
              console.log('cancel clicked');
            }
          },
          {
            text:'save',
            handler: data =>{
              const newItem = this.equipmentlist.push({});

              newItem.set({
                id: newItem.key,
                name: data.Itemname,
                price: data.itemprice,
                quantity: data.quantity,
                image :"\\assets\\img\\camping.jpg"
               });
              }
            }
          ]
           });
           prompt.present();
}
  tool() {
    this.navCtrl.push(Tools)
  }
  books() {
    this.navCtrl.push(Books)
  }
  statue() {
    this.navCtrl.push(Statues)
  }
  accesories()
  {
    this.navCtrl.push(Accesories)
  }
  textile()
  {
    this.navCtrl.push(Textiles)

  }
  itemlist(){
    this.navCtrl.push( Itemlist);
  }
}
