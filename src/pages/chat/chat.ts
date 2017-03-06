import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Chat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  chats:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.chats = [
      {
        isMe: true,
        image: '',
        content: 'Hello chat first',
        time: new Date(),
        senderName : ''
      },
      {
        isMe: false,
        image: '',
        content: 'Hello chat second',
        time: new Date(),
        senderName : ''
      }
    ];
  }

}
