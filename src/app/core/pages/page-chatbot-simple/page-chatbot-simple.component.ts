import { Component } from '@angular/core';
import { ChatbotHeaderComponent } from "../../components/chatbot/chatbot-header/chatbot-header.component";
import { ChatbotHistoryComponent } from "../../components/chatbot/chatbot-history/chatbot-history.component";
import { ChatbotInputComponent } from "../../components/chatbot/chatbot-input/chatbot-input.component";
import { ChatbotSidebarComponent } from '../../components/chatbot/chatbot-sidebar/chatbot-sidebar.component';

@Component({
  selector: 'app-page-chatbot-simple',
  standalone: true,
  imports: [ChatbotHeaderComponent, ChatbotHistoryComponent, ChatbotInputComponent, ChatbotSidebarComponent],
  templateUrl: './page-chatbot-simple.component.html',
  styleUrl: './page-chatbot-simple.component.scss'
})

export class PageChatbotSimpleComponent {

}
