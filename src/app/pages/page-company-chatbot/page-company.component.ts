import { Component } from '@angular/core';
import { ChatbotHeaderComponent } from '../../core/chatbot/chatbot-components/chatbot-header/chatbot-header.component';
import { ChatbotInputComponent } from '../../core/chatbot/chatbot-components/chatbot-inputs/chatbot-input/chatbot-input.component';
import { ChatbotSessionHistoryComponent } from '../../core/chatbot/chatbot-components/chatbot-session-history/chatbot-session-history.component';

@Component({
  selector: 'app-page-company',
  standalone: true,
  imports: [ChatbotHeaderComponent, ChatbotSessionHistoryComponent, ChatbotInputComponent],
  templateUrl: './page-company.component.html',
  styleUrl: './page-company.component.scss'
})
export class PageCompanyComponent {

}
