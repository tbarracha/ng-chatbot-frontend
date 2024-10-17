import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: any;

  constructor(private readonly http: HttpClient) {}

  loadConfig(): Observable<any> {
    return this.http.get('/assets/config/chatbot.config.json').pipe(
      tap((config) => {
        this.config = config;
        console.log('Config loaded:', this.config);
      })
    );
  }

  getConfig() {
    return this.config;
  }



  // ----------------------------------------------
  // Organization
  // ----------------------------------------------
  get organizationLogo(): string {
    return this.config?.organization?.logo ?? '';
  }

  get organizationLogoDark(): string {
    return this.config?.organization?.logoDark ?? this.organizationLogo;
  }

  get organizationName(): string {
    return this.config?.organization?.name ?? '';
  }

  get organizationUrl(): string {
    return this.config?.organization?.url ?? '';
  }



  // ----------------------------------------------
  // API
  // ----------------------------------------------

  get apiUrl(): string {
    return this.config.apiConnection.url;
  }

  get promptUrl(): string {
    return this.config.apiConnection.promptUrl;
  }

  get feedbackUrl(): string {
    return this.config.apiConnection.feedbackUrl;
  }
}
