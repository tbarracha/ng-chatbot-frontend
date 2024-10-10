// base-themed.component.ts
import { OnInit, OnDestroy, Directive } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { Subscription } from 'rxjs';

@Directive()
export abstract class BaseThemedComponent implements OnInit, OnDestroy {
  isDarkMode: boolean = false;
  private themeSubscription: Subscription = new Subscription();

  constructor(protected themeService: ThemeService) {}

  ngOnInit() {
    this.themeSubscription = this.themeService.darkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
