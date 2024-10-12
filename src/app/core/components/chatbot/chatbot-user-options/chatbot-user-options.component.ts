import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../../services/theme-service/theme.service';
import { ThemeToggleComponent } from "../../standalone/theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-chatbot-user-options',
  standalone: true,
  imports: [ThemeToggleComponent],
  templateUrl: './chatbot-user-options.component.html',
  styleUrl: './chatbot-user-options.component.scss'
})
export class ChatbotUserOptionsComponent {  
  isDropdownOpen = false;

  constructor(
    protected themeService: ThemeService
  ) {}

  toggleTheme() {
    this.themeService.toggleTheme();
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
}
