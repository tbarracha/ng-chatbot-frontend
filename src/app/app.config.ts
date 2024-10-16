import { ApplicationConfig, APP_INITIALIZER, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ConfigService } from './core/config/config.service';
import { APP_CONFIG } from './core/config/config.token';

// Function to load the configuration before app initialization
export function loadAppConfig(configService: ConfigService) {
  return () => configService.loadConfig(); 
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_CONFIG,            
      useFactory: (configService: ConfigService) => configService.getConfig(),  
      deps: [ConfigService]
    },
    {                                 
      provide: APP_INITIALIZER,
      useFactory: loadAppConfig,
      deps: [ConfigService],
      multi: true
    }
  ]
};
