import { Component } from '@angular/core';

@Component({
  selector: 'chat-bubble',
  inputs: ['msg: message'],
  templateUrl: 'chat-bubble.html'
})
export class ChatBubbleComponent {
  public msg: any;

  constructor() { }
}
