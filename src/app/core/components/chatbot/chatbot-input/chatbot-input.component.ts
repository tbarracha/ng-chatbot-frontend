import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ChatbotMessageService as ChatbotMessageService } from '../../../services/chatbot/chatbot-message.service';
import { ChatbotInputAttachmentComponent } from "../chatbot-input-attachment/chatbot-input-attachment.component";

@Component({
  selector: 'app-chatbot-input',
  standalone: true,
  templateUrl: './chatbot-input.component.html',
  styleUrls: ['./chatbot-input.component.scss'],
  imports: [ChatbotInputAttachmentComponent]
})
export class ChatbotInputComponent {
  @ViewChild('chatInput') chatInput!: ElementRef<HTMLDivElement>;
  @ViewChild('chatTextInput') chatTextInput!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  files: File[] = [];
  isDragging = false;
  dragCounter = 0;

  inputText: string = ''; // Preserve the message text

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
    this.inputText = textarea.value;
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.submitMessage();
    }
  }

  submitMessage(): void {
    const message = this.chatTextInput?.nativeElement.value.trim();
    if (message) {
      this.chatbotMessageService.sendMessage(message);
      this.chatbotMessageService.handleFiles(this.files);
      
      this.chatTextInput.nativeElement.value = '';
      this.chatTextInput.nativeElement.style.height = 'auto';

      this.inputText = '';
      this.clearFiles();
    }
  }

  openFileSelector(): void {
    this.fileInput.nativeElement.click(); // Trigger file input click
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleDroppedFiles(input.files);
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

    setTimeout(() => {
      this.refreshInputText();
    }, 50);
  }

  private isDroppedOnInput(event: DragEvent): boolean {
    const target = event.target as HTMLElement;
    return this.chatInput.nativeElement.contains(target);
  }

  handleDroppedFiles(files: FileList): void {
    Array.from(files).forEach(file => {
      const isDuplicate = this.files.some(existingFile =>
        existingFile.name === file.name && existingFile.type === file.type
      );
  
      if (!isDuplicate) {
        this.files.push(file);
      }
    });
  }

  removeFile(index: number): void {
    this.files.splice(index, 1);
  }

  clearFiles(): void {
    this.files = [];
  }

  refreshInputText(): void {
    if (!this.chatTextInput) {
      console.error('Chat text input element not found');
    }

    const textarea = this.chatTextInput.nativeElement;
    textarea.value = this.inputText;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 128)}px`;
  }
}
