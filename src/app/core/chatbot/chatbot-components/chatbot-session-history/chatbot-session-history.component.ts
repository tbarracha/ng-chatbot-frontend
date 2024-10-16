import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ChatbotSessionService } from '../../../chatbot/chatbot-services/chatbot-session.service';
import { ChatbotPromptAnswerComponent } from '../chatbot-prompts/chatbot-prompt-answer/chatbot-prompt-answer.component';
import { ChatbotPromptComponent } from '../chatbot-prompts/chatbot-prompt/chatbot-prompt.component';
import { Subscription } from 'rxjs';
import { ChatbotEventService } from '../../../chatbot/chatbot-services/chatbot-event.service';
import { ChatSessionMessage } from '../../chatbot-models/chatbot-models';

@Component({
  selector: 'app-chatbot-session-history',
  standalone: true,
  imports: [ChatbotPromptAnswerComponent, ChatbotPromptComponent],
  templateUrl: './chatbot-session-history.component.html',
  styleUrls: ['./chatbot-session-history.component.scss']
})
export class ChatbotSessionHistoryComponent implements OnInit, OnDestroy {
  @ViewChild('chatHistoryContainer') readonly chatHistoryContainer!: ElementRef<HTMLDivElement>;

  messages: ChatSessionMessage[] = []; // Messages are unified into a single array
  isAtBottom: boolean = true;

  private sessionChangeSubscription!: Subscription;
  private userMessageSubscription!: Subscription;
  private chatbotMessageSubscription!: Subscription;

  constructor(
    readonly chatbotEventService: ChatbotEventService,
    readonly chatbotMessageService: ChatbotSessionService
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
      .promptSent
      .subscribe(() => {
        this.scrollToBottom();
      });

    this.chatbotMessageSubscription = this.chatbotEventService
      .promptAnswerRecieved
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
    this.messages = this.chatbotMessageService.currentSession.messages; // Directly use the messages array
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
