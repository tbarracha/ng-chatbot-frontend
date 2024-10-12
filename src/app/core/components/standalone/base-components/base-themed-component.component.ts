// base-themed.component.ts
import { Directive } from '@angular/core';
import { ThemeService } from '../../../services/theme-service/theme.service';

@Directive()
export abstract class BaseThemedComponent {

  constructor(protected themeService: ThemeService) {}

  isDarkMode() {
    return this.themeService.isDarkMode();
  }
}
