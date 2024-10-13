import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ChatbotMessageService as ChatbotMessageService } from '../../../services/chatbot/chatbot-message.service';

@Component({
  selector: 'app-chatbot-input',
  standalone: true,
  templateUrl: './chatbot-input.component.html',
  styleUrls: ['./chatbot-input.component.scss']
})
export class ChatbotInputComponent {
  @ViewChild('chatInput') chatInput!: ElementRef<HTMLDivElement>;
  @ViewChild('chatTextInput') chatTextInput!: ElementRef<HTMLTextAreaElement>;

  isDragging = false;
  dragCounter = 0;

  constructor(private chatbotMessageService: ChatbotMessageService) {}

  ngAfterViewInit() {
    if (this.chatTextInput) {
      this.chatTextInput.nativeElement.value = '';
    }
  }

  adjustTextareaHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 128)}px`;
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      // Prevents the default behavior (adding a new line) and submits the message
      event.preventDefault();
      this.submitMessage();
    }
  }

  submitMessage(): void {
    const message = this.chatTextInput.nativeElement.value.trim();
    if (message) {
      this.chatbotMessageService.sendMessage(message);
      this.chatTextInput.nativeElement.value = '';
      this.chatTextInput.nativeElement.style.height = 'auto';
    }
  }

  // Global Drag and Drop Handlers
  @HostListener('document:dragenter', ['$event'])
  onDragEnter(event: DragEvent): void {
    this.dragCounter++;
    if (event.dataTransfer?.types.includes('Files')) {
      this.isDragging = true;
    }
  }

  @HostListener('document:dragleave', ['$event'])
  onDragLeave(event: DragEvent): void {
    this.dragCounter--;
    if (this.dragCounter === 0) {
      this.isDragging = false;
    }
  }

  @HostListener('document:dragover', ['$event'])
  onDragOver(event: DragEvent): void {
    event.preventDefault(); // Necessary to allow drop
  }

  @HostListener('document:drop', ['$event'])
  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
    this.dragCounter = 0;

    if (!this.isDroppedOnInput(event)) {
      return;
    }

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleDroppedFiles(files);
    }
  }

  private isDroppedOnInput(event: DragEvent): boolean {
    const target = event.target as HTMLElement;
    return this.chatInput.nativeElement.contains(target);
  }

  handleDroppedFiles(files: FileList): void {
    // Handle the dropped files here, e.g., upload them to a server or display previews
    Array.from(files).forEach(file => {
      console.log('Dropped file:', file);
      // Example: Send the file to the chatbot service
      this.chatbotMessageService.handleFileDrop(file);
    });
  }
}
