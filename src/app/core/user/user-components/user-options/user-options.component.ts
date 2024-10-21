import { Component, HostListener } from '@angular/core';
import { UserSettingsComponent } from "../user-settings/user-settings.component";
import { ThemeToggleComponent } from '../../../common/components/theme-toggle/theme-toggle.component';
import { EventService } from '../../../common/services/event-service/event.service';
import { ThemeService } from '../../../common/services/theme-service/theme.service';

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
