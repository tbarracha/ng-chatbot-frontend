import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarComponent } from '../../standalone/sidebar/sidebar.component';
import { Subscription } from 'rxjs';
import { ChatbotEventService } from '../../../services/chatbot/chatbot-event.service';

@Component({
  selector: 'app-chatbot-sidebar',
  standalone: true,
  templateUrl: './chatbot-sidebar.component.html',
  styleUrls: ['./chatbot-sidebar.component.scss']
})
export class ChatbotSidebarComponent extends SidebarComponent implements OnInit, OnDestroy {
  private sidebarToggleSubscription!: Subscription;

  constructor(private chatbotEventManagerService: ChatbotEventService) {
    super();
  }

  ngOnInit() {
    this.sidebarToggleSubscription = this.chatbotEventManagerService
      .getSidebarToggleObservable()
      .subscribe(() => this.toggleSidebar());
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
