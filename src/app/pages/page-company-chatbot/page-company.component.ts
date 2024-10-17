import { Component } from '@angular/core';
import { ChatbotHeaderComponent } from '../../core/chatbot/chatbot-components/chatbot-header/chatbot-header.component';
import { ChatbotInputComponent } from '../../core/chatbot/chatbot-components/chatbot-inputs/chatbot-input/chatbot-input.component';
import { ChatbotSessionHistoryComponent } from '../../core/chatbot/chatbot-components/chatbot-session-history/chatbot-session-history.component';
import { BlankModalComponent } from "../../core/common/components/blank-modal/blank-modal.component";
import { SelectorComponent } from "../../core/common/components/selector/selector.component";
import { ChatbotPageComponent } from '../../core/chatbot/chatbot-components/chatbot-page/chatbot-page.component';

@Component({
  selector: 'app-page-company',
  standalone: true,
  imports: [ChatbotHeaderComponent, ChatbotSessionHistoryComponent, ChatbotInputComponent, BlankModalComponent, SelectorComponent],
  templateUrl: './page-company.component.html',
  styleUrl: './page-company.component.scss'
})
export class PageCompanyComponent extends ChatbotPageComponent {

}
