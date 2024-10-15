import { Component } from '@angular/core';
import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { ChatbotMessageVoteComponent } from "../chatbot-message-vote/chatbot-message-vote.component";

@Component({
  selector: 'app-chatbot-message',
  standalone: true,
  imports: [ChatbotMessageVoteComponent],
  templateUrl: './chatbot-message.component.html',
  styleUrl: './chatbot-message.component.scss'
})
export class ChatbotMessageComponent extends ChatMessageComponent {


  vote(vote: string) {
    console.log("WIP Voted:", vote);
  }

  copyToClipboard() {
    console.log("WIP Coppied to clipboard:");
  }

  additionalAction() {
    console.log("WIP Pressed some other action:");
  }

}
