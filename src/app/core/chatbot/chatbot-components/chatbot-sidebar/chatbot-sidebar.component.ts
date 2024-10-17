import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatbotEventService } from '../../chatbot-services/chatbot-events/chatbot-event.service';
import { ChatbotSessionService } from '../../chatbot-services/chatbot-session/chatbot-session.service';
import { SidebarComponent } from '../../../common/components/sidebar/sidebar.component';
import { ChatSession } from '../../chatbot-models/chatbot-models';

@Component({
  selector: 'app-chatbot-sidebar',
  standalone: true,
  templateUrl: './chatbot-sidebar.component.html',
  styleUrls: ['./chatbot-sidebar.component.scss']
})
export class ChatbotSidebarComponent extends SidebarComponent implements OnInit, OnDestroy {
  private sidebarToggleSubscription!: Subscription;
  chatSessions: ChatSession[] = [];

  constructor(
    readonly chatbotEventManagerService: ChatbotEventService,
    readonly chatbotMessageService: ChatbotSessionService
  ) {
    super();
  }

  ngOnInit() {
    this.sidebarToggleSubscription = this.chatbotEventManagerService
      .getSidebarToggleObservable()
      .subscribe(() => this.toggleSidebar());

    // Load chat sessions
    this.chatSessions = this.chatbotMessageService.getSessions(); // Assume a getSessions() method in the service
  }

  selectSession(sessionId: string): void {
    this.chatbotMessageService.switchSession(sessionId); // Switch session in the service
  }

  override ngOnDestroy() {
    super.ngOnDestroy();

    if (this.sidebarToggleSubscription) {
      this.sidebarToggleSubscription.unsubscribe();
    }
  }

  override toggleSidebar() {
    super.toggleSidebar();
    this.chatbotEventManagerService.isSidebarOpen = this.isSidebarOpen;
  }
}
