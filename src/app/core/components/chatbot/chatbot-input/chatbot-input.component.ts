import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chatbot-input',
  standalone: true,
  imports: [],
  templateUrl: './chatbot-input.component.html',
  styleUrl: './chatbot-input.component.scss'
})

export class ChatbotInputComponent {
  @ViewChild('chatInput') chatInput!: ElementRef<HTMLTextAreaElement>;

  ngAfterViewInit() {
    if (this.chatInput) {
      this.chatInput.nativeElement.value = '';
    }
  }

  adjustTextareaHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 128)}px`;
  }
}

