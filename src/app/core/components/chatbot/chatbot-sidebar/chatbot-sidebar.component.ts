import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarComponent } from '../../standalone/sidebar/sidebar.component';
import { Subscription } from 'rxjs';
import { ChatbotEventService } from '../../../services/chatbot/chatbot-event.service';
import { ChatbotSessionService } from '../../../services/chatbot/chatbot-session.service';
import { ChatSession } from '../../../common/chatbot-models';

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
