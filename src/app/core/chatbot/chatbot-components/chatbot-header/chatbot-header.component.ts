import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { ChatbotEventService } from '../../chatbot-services/chatbot-events/chatbot-event.service';
import { InputSelectorComponent, SelectorOption } from '../../../common/components/input-components/input-selector/input-selector.component';
import { ThemeToggleComponent } from '../../../common/components/theme-toggle/theme-toggle.component';
import { ThemeService } from '../../../common/services/theme-service/theme.service';
import { ConfigService } from '../../../config/config.service';
import { ChatbotApiService } from '../../chatbot-services/chatbot-api/chatbot-api.service';
import { UserOptionsComponent } from '../../../user/user-components/user-options/user-options.component';



@Component({
  selector: 'app-chatbot-header',
  standalone: true,
  imports: [InputSelectorComponent, ThemeToggleComponent, NgClass, UserOptionsComponent],
  templateUrl: './chatbot-header.component.html',
  styleUrl: './chatbot-header.component.scss'
})
export class ChatbotHeaderComponent {

  @ViewChild('themeToggle') themeToggle!: ThemeToggleComponent;

  @Input() showSidebarToggle: boolean = true;

  selectedModel: SelectorOption | null = null;
  logoUrl: string = '';
  logoDarkUrl: string = '';

  llmModels: SelectorOption[] = [
    { id: 1, value: 'GPT-3.5' },
    { id: 2, value: 'GPT-4' },
    { id: 3, value: 'BERT' }
  ];

  constructor(
    readonly configService: ConfigService,
    readonly themeService: ThemeService,
    readonly chatbotEventManagerService: ChatbotEventService,
    readonly chatbotApiService: ChatbotApiService,
    readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.chatbotEventManagerService
      .onSidebarToggled
      .subscribe(() => this.sidebarToggled());

    this.logoUrl = this.configService.organizationLogo;
    this.logoDarkUrl = this.configService.organizationLogoDark;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isDarkMode() {
    return this.themeService.isDarkMode();
  }

  toggleSidebar() {
    this.chatbotEventManagerService.onSidebarToggled.emit();
  }

  isSidebarOpen() {
    return this.chatbotEventManagerService.isSidebarOpen;
  }

  private sidebarToggled() {
    this.cdr.detectChanges();
  }
}
