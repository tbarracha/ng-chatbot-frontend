import { Component, HostListener } from '@angular/core';
import { ThemeToggleComponent } from '../../theme-toggle/theme-toggle.component';
import { ThemeService } from '../../../services/theme-service/theme.service';
import { EventService } from '../../../services/event-service/event.service';
import { UserSettingsComponent } from "../user-settings/user-settings.component";

@Component({
  selector: 'app-user-options',
  standalone: true,
  imports: [ThemeToggleComponent, UserSettingsComponent],
  templateUrl: './user-options.component.html',
  styleUrl: './user-options.component.scss'
})
export class UserOptionsComponent {  
  isDropdownOpen = false;

  constructor(
    readonly themeService: ThemeService,
    readonly eventService: EventService
  ) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  triggerOptionEvent(eventId: string) {
    this.eventService.userOptionsClickEvt.emit(eventId);
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-container')) {
      this.isDropdownOpen = false;
    }
  }
}
