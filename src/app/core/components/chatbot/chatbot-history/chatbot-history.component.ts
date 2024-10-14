import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ChatbotMessageService } from '../../../services/chatbot/chatbot-message.service';
import { ChatbotMessageComponent } from "../messages/chatbot-message/chatbot-message.component";
import { ChatMessage } from '../../../common/chatbot-models';
import { ChatbotEventService } from '../../../services/chatbot/chatbot-event.service';
import { Subscription } from 'rxjs';
import { UserMessageComponent } from '../messages/user-message/user-message.component';

@Component({
  selector: 'app-chatbot-history',
  standalone: true,
  imports: [ChatbotMessageComponent, UserMessageComponent],
  templateUrl: './chatbot-history.component.html',
  styleUrls: ['./chatbot-history.component.scss']
})
export class ChatbotHistoryComponent implements OnInit, OnDestroy {
  @ViewChild('chatHistoryContainer') readonly chatHistoryContainer!: ElementRef<HTMLDivElement>;

  messages: ChatMessage[] = [];
  private sessionChangeSubscription!: Subscription;

  constructor(
    readonly chatbotEventService: ChatbotEventService,
    readonly chatbotMessageService: ChatbotMessageService
  ) {}

  ngOnInit(): void {
    this.messages = this.chatbotMessageService.currentSession.messages;

    this.sessionChangeSubscription = this.chatbotEventService
      .getSessionChangeObservable()
      .subscribe(() => {
        this.messages = this.chatbotMessageService.currentSession.messages;
        this.scrollToBottom();
      });

    this.scrollToBottom();
  }

  ngOnDestroy(): void {
    if (this.sessionChangeSubscription) {
      this.sessionChangeSubscription.unsubscribe();
    }
  }

  scrollToBottom(): void {
    try {
      setTimeout(() => {
        this.chatHistoryContainer.nativeElement.scrollTo({
          top: this.chatHistoryContainer.nativeElement.scrollHeight,
          behavior: 'smooth'
        });
      }, 0);
    } catch (err) {
      console.error('Smooth scroll to bottom failed:', err);
    }
  }
}
