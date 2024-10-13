import { Component } from '@angular/core';
import { ChatbotHeaderComponent } from "../../components/chatbot/chatbot-header/chatbot-header.component";
import { ChatbotHistoryComponent } from "../../components/chatbot/chatbot-history/chatbot-history.component";
import { ChatbotInputComponent } from "../../components/chatbot/chatbot-input/chatbot-input.component";
import { ChatbotSidebarComponent } from '../../components/chatbot/chatbot-sidebar/chatbot-sidebar.component';

@Component({
  selector: 'app-page-chatbot',
  standalone: true,
  imports: [ChatbotHeaderComponent, ChatbotHistoryComponent, ChatbotInputComponent, ChatbotSidebarComponent],
  templateUrl: './page-chatbot.component.html',
  styleUrl: './page-chatbot.component.scss'
})

export class PageChatbotComponent {

}
