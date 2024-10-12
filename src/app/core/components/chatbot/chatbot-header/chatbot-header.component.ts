import { ChangeDetectorRef, Component, HostListener, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { SelectorComponent } from "../../standalone/selector/selector.component";
import { SelectorOption } from '../../../common/standalone-models';
import { ThemeToggleComponent } from "../../standalone/theme-toggle/theme-toggle.component";
import { ThemeService } from '../../../services/theme-service/theme.service';
import { ChatbotEventManagerService } from '../../../services/chatbot/chatbot-event-manager.service';
import { Subscription } from 'rxjs';
import { ChatbotUserOptionsComponent } from "../chatbot-user-options/chatbot-user-options.component";

@Component({
  selector: 'app-chatbot-header',
  standalone: true,
  imports: [SelectorComponent, ThemeToggleComponent, NgClass, ChatbotUserOptionsComponent],
  templateUrl: './chatbot-header.component.html',
  styleUrl: './chatbot-header.component.scss'
})
export class ChatbotHeaderComponent {
  @ViewChild('themeToggle') themeToggle!: ThemeToggleComponent;

  private sidebarToggleSubscription!: Subscription;

  selectedModel: SelectorOption | null = null;

  llmModels: SelectorOption[] = [
    { id: 1, value: 'GPT-3.5' },
    { id: 2, value: 'GPT-4' },
    { id: 3, value: 'BERT' }
  ];

  constructor(
    protected themeService: ThemeService,
    protected chatbotEventManagerService: ChatbotEventManagerService,
    protected cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.sidebarToggleSubscription = this.chatbotEventManagerService
      .getSidebarToggleObservable()
      .subscribe(() => this.sidebarToggled());
  }

  ngOnDestroy() {
    if (this.sidebarToggleSubscription) {
      this.sidebarToggleSubscription.unsubscribe();
    }
  }

  onModelSelected(model: SelectorOption) {
    this.selectedModel = model;
    console.log('Selected LLM model:', model);
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

  isSidebarOpen() {
    return this.chatbotEventManagerService.isSidebarOpen;
  }

  private sidebarToggled() {
    this.cdr.detectChanges();
  }
}
