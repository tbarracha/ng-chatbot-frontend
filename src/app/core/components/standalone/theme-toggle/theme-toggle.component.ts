import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { BaseThemedComponent } from '../base-themed-component/base-themed-component.component';

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
