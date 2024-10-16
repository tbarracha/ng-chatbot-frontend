import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ChatbotMessageService } from '../../../services/chatbot/chatbot-message.service';
import { ChatbotPromptAnswerComponent } from '../chatbot-prompts/chatbot-prompt-answer/chatbot-prompt-answer.component';
import { ChatbotPromptComponent } from '../chatbot-prompts/chatbot-prompt/chatbot-prompt.component';
import { Subscription } from 'rxjs';
import { Message } from '../../../common/chatbot-models';
import { ChatbotEventService } from '../../../services/chatbot/chatbot-event.service';

@Component({
  selector: 'app-chatbot-session-history',
  standalone: true,
  imports: [ChatbotPromptAnswerComponent, ChatbotPromptComponent],
  templateUrl: './chatbot-session-history.component.html',
  styleUrls: ['./chatbot-session-history.component.scss']
})
export class ChatbotSessionHistoryComponent implements OnInit, OnDestroy {
  @ViewChild('chatHistoryContainer') readonly chatHistoryContainer!: ElementRef<HTMLDivElement>;

  messages: Message[] = [];
  isAtBottom: boolean = true;

  private sessionChangeSubscription!: Subscription;
  private userMessageSubscription!: Subscription;
  private chatbotMessageSubscription!: Subscription;

  constructor(
    readonly chatbotEventService: ChatbotEventService,
    readonly chatbotMessageService: ChatbotMessageService
  ) {}

  ngOnInit(): void {
    this.refreshMessages();

    this.sessionChangeSubscription = this.chatbotEventService
      .getSessionChangeObservable()
      .subscribe(() => {
        this.refreshMessages();
        this.scrollToBottom();
      });

    this.userMessageSubscription = this.chatbotEventService
      .userMessageSent
      .subscribe(() => {
        this.scrollToBottom();
      });

    this.chatbotMessageSubscription = this.chatbotEventService
      .chatbotMessageRecieved
      .subscribe(() => {
        this.scrollToBottom();
      });

    this.scrollToBottom();
  }

  ngOnDestroy(): void {
    if (this.sessionChangeSubscription) {
      this.sessionChangeSubscription.unsubscribe();
    }
  }

  refreshMessages(): void {
    this.messages = this.chatbotMessageService.getSessionMessages();
  }

  scrollToBottom(): void {
    try {
      setTimeout(() => {
        this.chatHistoryContainer.nativeElement.scrollTo({
          top: this.chatHistoryContainer.nativeElement.scrollHeight,
          behavior: 'smooth'
        });
      }, 10);
    } catch (err) {
      console.error('Smooth scroll to bottom failed:', err);
    }
  }

  onScroll(): void {
    const container = this.chatHistoryContainer.nativeElement;
    const isScrolledToBottom =
      container.scrollHeight - container.scrollTop <= container.clientHeight + 150;

    this.isAtBottom = isScrolledToBottom;
  }
}
