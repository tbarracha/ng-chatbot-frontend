import { Component, ElementRef, ViewChild } from '@angular/core';
import { BaseThemedComponent } from '../../standalone/base-themed-component/base-themed-component.component';

@Component({
  selector: 'app-chatbot-input',
  standalone: true,
  imports: [],
  templateUrl: './chatbot-input.component.html',
  styleUrl: './chatbot-input.component.scss'
})

export class ChatbotInputComponent extends BaseThemedComponent {
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

