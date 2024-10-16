import { Component } from '@angular/core';
import { ChatbotHeaderComponent } from "../../core/components/chatbot/chatbot-header/chatbot-header.component";
import { ChatbotSessionHistoryComponent } from "../../core/components/chatbot/chatbot-session-history/chatbot-session-history.component";
import { ChatbotInputComponent } from "../../core/components/chatbot/chatbot-inputs/chatbot-input/chatbot-input.component";

@Component({
  selector: 'app-page-company',
  standalone: true,
  imports: [ChatbotHeaderComponent, ChatbotSessionHistoryComponent, ChatbotInputComponent],
  templateUrl: './page-company.component.html',
  styleUrl: './page-company.component.scss'
})
export class PageCompanyComponent {

}
