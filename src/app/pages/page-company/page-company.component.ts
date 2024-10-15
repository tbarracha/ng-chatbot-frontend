import { Component } from '@angular/core';
import { ChatbotHeaderComponent } from "../../core/components/chatbot/chatbot-header/chatbot-header.component";
import { ChatbotHistoryComponent } from "../../core/components/chatbot/chatbot-history/chatbot-history.component";
import { ChatbotInputComponent } from "../../core/components/chatbot/chatbot-input/chatbot-input.component";

@Component({
  selector: 'app-page-company',
  standalone: true,
  imports: [ChatbotHeaderComponent, ChatbotHistoryComponent, ChatbotInputComponent],
  templateUrl: './page-company.component.html',
  styleUrl: './page-company.component.scss'
})
export class PageCompanyComponent {

}
