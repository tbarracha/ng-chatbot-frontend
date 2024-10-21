import { Component } from '@angular/core';
import { ChatbotHeaderComponent } from '../../core/chatbot/chatbot-components/chatbot-header/chatbot-header.component';
import { ChatbotInputComponent } from '../../core/chatbot/chatbot-components/chatbot-inputs/chatbot-input/chatbot-input.component';
import { ChatbotSessionHistoryComponent } from '../../core/chatbot/chatbot-components/chatbot-session-history/chatbot-session-history.component';
import { ChatbotSidebarComponent } from '../../core/chatbot/chatbot-components/chatbot-sidebar/chatbot-sidebar.component';
import { ChatbotSettingsComponent } from "../../core/chatbot/chatbot-components/chatbot-settings/chatbot-settings.component";

@Component({
  selector: 'app-page-chatbot',
  standalone: true,
  imports: [ChatbotHeaderComponent, ChatbotSessionHistoryComponent, ChatbotInputComponent, ChatbotSidebarComponent, ChatbotSettingsComponent],
  templateUrl: './page-chatbot.component.html',
  styleUrl: './page-chatbot.component.scss'
})

export class PageChatbotComponent {

}
