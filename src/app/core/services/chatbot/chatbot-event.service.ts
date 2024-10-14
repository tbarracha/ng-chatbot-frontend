import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotEventService {
  private sidebarToggleSubject = new Subject<void>();
  private sessionChangeSubject = new Subject<void>();

  isSidebarOpen = true;

  constructor() {}

  getSidebarToggleObservable() {
    return this.sidebarToggleSubject.asObservable();
  }

  getSessionChangeObservable() {
    return this.sessionChangeSubject.asObservable();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarToggleSubject.next();
  }

  notifySessionChange() {
    this.sessionChangeSubject.next();
  }
}
