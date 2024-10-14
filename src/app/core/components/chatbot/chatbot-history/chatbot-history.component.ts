import { Component, OnInit } from '@angular/core';
import { ChatbotMessageService } from '../../../services/chatbot/chatbot-message.service';
import { ChatbotMessageComponent } from "../messages/chatbot-message/chatbot-message.component";
import { UserMessageComponent } from "../messages/user-message/user-message.component";
import { ChatMessage } from '../../../common/chatbot-models';
import { ChatbotEventService } from '../../../services/chatbot/chatbot-event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chatbot-history',
  standalone: true,
  imports: [ChatbotMessageComponent, UserMessageComponent],
  templateUrl: './chatbot-history.component.html',
  styleUrls: ['./chatbot-history.component.scss']
})
export class ChatbotHistoryComponent implements OnInit {
  messages: ChatMessage[] = [];
  private sessionChangeSubscription!: Subscription;

  constructor(
    private chatbotEventService: ChatbotEventService,
    private chatbotMessageService: ChatbotMessageService
  ) {}

  ngOnInit(): void {
    this.messages = this.chatbotMessageService.currentSession.messages;

    this.sessionChangeSubscription = this.chatbotEventService
      .getSessionChangeObservable()
      .subscribe(() => {
        this.messages = this.chatbotMessageService.currentSession.messages;
      });
  }

  ngOnDestroy(): void {
    if (this.sessionChangeSubscription) {
      this.sessionChangeSubscription.unsubscribe();
    }
  }
}
