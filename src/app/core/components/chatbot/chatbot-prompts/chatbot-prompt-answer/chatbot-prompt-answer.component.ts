import { Component } from '@angular/core';
import { ChatbotPromptContainerComponent } from '../chatbot-prompt-container/chatbot-prompt-container.component';
import { ChatbotPromptVoteComponent } from "../chatbot-prompt-vote/chatbot-prompt-vote.component";

@Component({
  selector: 'app-chatbot-prompt-answer',
  standalone: true,
  imports: [ChatbotPromptVoteComponent],
  templateUrl: './chatbot-prompt-answer.component.html',
  styleUrl: './chatbot-prompt-answer.component.scss'
})
export class ChatbotPromptAnswerComponent extends ChatbotPromptContainerComponent {


  vote(vote: string) {
    console.log("WIP Voted:", vote);
  }

  copyToClipboard() {
    console.log("WIP Coppied to clipboard:");
  }

  additionalAction() {
    console.log("WIP Pressed some other action:");
  }

}
