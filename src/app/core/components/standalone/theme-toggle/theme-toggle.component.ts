import { Component, Input } from '@angular/core';
import { BaseThemedComponent } from '../base-components/base-themed-component.component';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})

export class ThemeToggleComponent extends BaseThemedComponent {
  @Input() isIconOnly: boolean = true;
  @Input() textNextToIcon: string = 'Theme';

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
