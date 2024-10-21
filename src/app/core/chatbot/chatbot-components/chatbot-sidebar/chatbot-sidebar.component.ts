import { Component, OnInit } from '@angular/core';
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
export class ChatbotSidebarComponent extends SidebarComponent implements OnInit {
  chatSessions: ChatSession[] = [];

  constructor(
    readonly chatbotEventManagerService: ChatbotEventService,
    readonly chatbotMessageService: ChatbotSessionService
  ) {
    super();
  }

  ngOnInit() {
    this.chatbotEventManagerService
      .onSidebarToggled
      .subscribe(() => this.toggleSidebar());

    this.chatSessions = this.chatbotMessageService.getSessions();
  }

  selectSession(sessionId: string): void {
    this.chatbotMessageService.switchSession(sessionId);
  }

  override toggleSidebar() {
    super.toggleSidebar();
    this.chatbotEventManagerService.isSidebarOpen = this.isSidebarOpen;
  }
}
