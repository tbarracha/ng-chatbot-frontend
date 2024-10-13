import { Component, OnInit } from '@angular/core';
import { ChatbotMessageService } from '../../../services/chatbot/chatbot-message.service';
import { ChatbotMessageComponent } from "../messages/chatbot-message/chatbot-message.component";
import { UserMessageComponent } from "../messages/user-message/user-message.component";
import { ChatMessage } from '../../../common/chatbot-models';

@Component({
  selector: 'app-chatbot-history',
  standalone: true,
  imports: [ChatbotMessageComponent, UserMessageComponent],
  templateUrl: './chatbot-history.component.html',
  styleUrls: ['./chatbot-history.component.scss']
})
export class ChatbotHistoryComponent implements OnInit {
  messages: ChatMessage[] = [];

  constructor(private chatbotMessageService: ChatbotMessageService) {}

  ngOnInit(): void {
    this.messages = this.chatbotMessageService.currentSession.messages;
  }
}
