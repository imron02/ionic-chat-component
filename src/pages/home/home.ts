import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goToChat(): void {
    this.navCtrl.push(ChatPage);
  }
}
