import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ChatbotSessionService } from '../../chatbot-services/chatbot-session/chatbot-session.service';
import { ChatbotPromptAnswerComponent } from '../chatbot-prompts/chatbot-prompt-answer/chatbot-prompt-answer.component';
import { ChatbotPromptComponent } from '../chatbot-prompts/chatbot-prompt/chatbot-prompt.component';
import { ChatbotEventService } from '../../chatbot-services/chatbot-events/chatbot-event.service';
import { ChatSessionMessage } from '../../chatbot-models/chatbot-models';

@Component({
  selector: 'app-chatbot-session-history',
  standalone: true,
  imports: [ChatbotPromptAnswerComponent, ChatbotPromptComponent],
  templateUrl: './chatbot-session-history.component.html',
  styleUrls: ['./chatbot-session-history.component.scss']
})
export class ChatbotSessionHistoryComponent implements OnInit {
  @ViewChild('chatHistoryContainer') readonly chatHistoryContainer!: ElementRef<HTMLDivElement>;

  messages: ChatSessionMessage[] = []; // Messages are unified into a single array
  isAtBottom: boolean = true;


  constructor(
    readonly chatbotEventService: ChatbotEventService,
    readonly chatbotMessageService: ChatbotSessionService
  ) {}

  ngOnInit(): void {
    this.refreshMessages();

    this.chatbotEventService
      .onSessionChanged
      .subscribe(() => {
        this.refreshMessages();
        this.scrollToBottom();
      });

    this.chatbotEventService
      .onPromptSent
      .subscribe(() => {
        this.scrollToBottom();
      });

    this.chatbotEventService
      .onPromptAnswerReceived
      .subscribe(() => {
        this.scrollToBottom();
      });

    this.scrollToBottom();
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
