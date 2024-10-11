import { Component } from '@angular/core';
import { BaseThemedComponent } from '../base-components/base-themed-component.component';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent extends BaseThemedComponent {

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
