import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarComponent } from '../../standalone/sidebar/sidebar.component';
import { Subscription } from 'rxjs';
import { ChatbotEventService } from '../../../services/chatbot/chatbot-event.service';
import { ChatbotMessageService } from '../../../services/chatbot/chatbot-message.service';
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
    private chatbotEventManagerService: ChatbotEventService,
    private chatbotMessageService: ChatbotMessageService
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
