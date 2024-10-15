import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotEventService {
  readonly sidebarToggleSubject = new Subject<void>();
  readonly sessionChangeSubject = new Subject<void>();
  readonly userMessageSent = new Subject<void>();
  readonly chatbotMessageRecieved = new Subject<void>();

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
