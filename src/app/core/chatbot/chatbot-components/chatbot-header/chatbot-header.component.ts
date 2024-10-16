import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { SelectorOption } from '../../../common/models/standalone-models';
import { ChatbotEventService } from '../../../chatbot/chatbot-services/chatbot-event.service';
import { Subscription } from 'rxjs';
import { ChatbotUserOptionsComponent } from "../chatbot-user-options/chatbot-user-options.component";
import { SelectorComponent } from '../../../common/components/selector/selector.component';
import { ThemeToggleComponent } from '../../../common/components/theme-toggle/theme-toggle.component';
import { ThemeService } from '../../../common/services/theme-service/theme.service';



@Component({
  selector: 'app-chatbot-header',
  standalone: true,
  imports: [SelectorComponent, ThemeToggleComponent, NgClass, ChatbotUserOptionsComponent],
  templateUrl: './chatbot-header.component.html',
  styleUrl: './chatbot-header.component.scss'
})
export class ChatbotHeaderComponent {
  @ViewChild('themeToggle') themeToggle!: ThemeToggleComponent;

  @Input() showSidebarToggle: boolean = true;

  private sidebarToggleSubscription!: Subscription;

  selectedModel: SelectorOption | null = null;

  llmModels: SelectorOption[] = [
    { id: 1, value: 'GPT-3.5' },
    { id: 2, value: 'GPT-4' },
    { id: 3, value: 'BERT' }
  ];

  constructor(
    readonly themeService: ThemeService,
    readonly chatbotEventManagerService: ChatbotEventService,
    readonly cdr: ChangeDetectorRef
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
