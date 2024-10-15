import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  readonly config: any;

  constructor(readonly http: HttpClient) {}

  loadConfig(): Observable<any> {
    return this.http.get('/assets/config/chatbot.config.json');  // Fetch from assets 
  }

  getConfig() {
    return this.config;  // Return the stored config
  }
}
