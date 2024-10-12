import { Component, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { SelectorComponent } from "../../standalone/selector/selector.component";
import { SelectorOption } from '../../../models/standalone-models';
import { ThemeToggleComponent } from "../../standalone/theme-toggle/theme-toggle.component";
import { ThemeService } from '../../../services/theme-service/theme.service';
import { ChatbotEventManagerService } from '../../../services/chatbot/chatbot-event-manager.service';

@Component({
  selector: 'app-chatbot-header',
  standalone: true,
  imports: [SelectorComponent, ThemeToggleComponent],
  templateUrl: './chatbot-header.component.html',
  styleUrl: './chatbot-header.component.scss'
})
export class ChatbotHeaderComponent {
  @ViewChild('themeToggle') themeToggle!: ThemeToggleComponent;

  isDropdownOpen = false;

  llmModels: SelectorOption[] = [
    { id: 1, value: 'GPT-3.5' },
    { id: 2, value: 'GPT-4' },
    { id: 3, value: 'BERT' }
  ];

  selectedModel: SelectorOption | null = null;

  constructor(
    protected themeService: ThemeService,
    protected chatbotEventManagerService: ChatbotEventManagerService
  ) {}

  onModelSelected(model: SelectorOption) {
    this.selectedModel = model;
    console.log('Selected LLM model:', model);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-container')) {
      this.isDropdownOpen = false;
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isDarkMode() {
    return this.themeService.isDarkMode();
  }

  toggleSidebar() {
    this.chatbotEventManagerService.toggleSidebar();
  }
}
